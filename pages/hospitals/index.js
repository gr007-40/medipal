import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useEffect,useState} from "react";
import { render, unstable_renderSubtreeIntoContainer } from 'react-dom';

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


export default function HospitalCards(){
    const [dataResponse,setdataResponse]=useState([]);
    useEffect(()=>{
        async function getPageData(){
            const apiUrlEndpoint='http://localhost:3000/api/getdata';
            const response = await fetch(apiUrlEndpoint);
            const res=await response.json();
            console.log(res.hospital_list);
            setdataResponse(hospital_list);
        }
        getPageData();
    },[]);

    render() {
        // pass in your data through props
        const { cardDataJSONObject } = this.props

        // assuming you are getting your card data in a large json object
        let cardList = []
        Object.keys(cardDataJSONObject).forEach((cardIndex) => {
            let card = cardDataJSONObject[cardIndex]
            cardList.push (
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardHeader
                        title={card.name}
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardMedia
                    component="img"
                    imageURL={card.image}
                  />
                      <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                            {card.title}
                            </Typography>
                            <Typography>
                            Please click on 'View' to learn more about {card.title}.
                            </Typography>
                        </CardContent>
                    <CardActions>
                       <Button id={card.id} size="small">View</Button>
                    </CardActions>
                </Card>            
            )
        });

        return (
            <div>
                {dataResponse.map((hospital_list)=>{
                    return(
                        <ThemeProvider theme={theme}>
                        <img src="/loginimg.jpg" className={styles.im}></img>
                        <CssBaseline />
                        <main>
                            <Container sx={{ py: 8 }} maxWidth="md">
                            {/* End hero unit */}
                            <Grid container spacing={4}>
                                {cards.map((card) => (
                                <Grid item key={card} xs={12} sm={6} md={4}>
                                    <div className='card-list'>
                                    {/* here we are rendering the list of cards we build up above */}
                                    { cardList }
                                </div>
                                </Grid>
                                ))}
                            </Grid>
                            </Container>
                        </main>
                        </ThemeProvider>
                    );
                }
                )}
                
            </div>
        );
    }
}