import Image from 'mui-image';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box'
import styles from '../styles/Home.module.css';
import {Typography} from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { Container } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { borders } from '@mui/system';


const useStyles = makeStyles((theme) => ({
    appBar: {
      backgroundColor: "#fff"
    },
    hero: {
      /*backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,*/
      height: "500px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontSize: "4rem",
     
    },
    my:   {
      padding: '10px',   
      height: "600px",
     /* border: "5px outset red",
      backgroundColor: " lightblue", */ 
      alignItems: "center",
    },
   
    my2:   {
      padding: '30px',   
    
    },
  }));
  const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    width: '40rem',
    height: '20rem',
  };
export default function About() {
    const classes = useStyles();
    return (
        <div >
        <Box className={styles.page} display={'flex'} flexDirection={'column'}>
           <img src="/hp.png" className={classes.hero} ></img>
  
        </Box>
        <Container maxWidth="lg">
      
       <div className={classes.my2}></div>
       
    <div className={classes.my}>
    <Typography variant={'h4'} align={'center'} sx={{color:'#000080',fontFamily: 'Raleway'}}gutterBottom>ABOUT US </Typography>
     
       
        <div className={classes.my2}></div>
        <Grid container spacing={3} >
  
          <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center', t: 10}}>
          <Box sx={{ ...commonStyles, border:0 ,backgroundColor: '#AEC6CF',}}>
          <img src="/E.jpg" width="100%" height="62%"></img>
      <Typography variant={'h8'} align={'center'} sx={{color:'#000080',fontFamily: 'Raleway'}} paragraph  gutterBottom >OUR VISION</Typography>
      <Typography variant={'h8'} align={'center'} sx={{color:'#000000',fontFamily: 'Raleway'}} paragraph  gutterBottom >Smarter healthcare that is easily accessible to everyone & cheaper healthcare via price transparency across all healthcare services.</Typography>
     
        </Box> 
      
    </Box>
    </Grid>

    <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          
      <Box sx={{ ...commonStyles,border:0 ,backgroundColor: '#AEC6CF',}}>
      <img src="/m.jpg" width="100%" height="62%"></img>
      <Typography variant={'h8'} align={'center'} sx={{color:'#000080',fontFamily: 'Raleway'}} paragraph  gutterBottom>OUR MISSION </Typography>
      <Typography variant={'h8'} align={'center'} sx={{color:'#000000',fontFamily: 'Raleway'}} paragraph  gutterBottom >To enable quality, affordable healthcare for everyone, everywhere.</Typography>
        </Box> 
      
      
    </Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          
      <Box sx={{ ...commonStyles,border:0 ,backgroundColor: '#AEC6CF',}}>
      <img src="/pi.jpg" width="100%" height="62%"></img>
      <Typography variant={'h8'} align={'center'} sx={{color:'#000080',fontFamily: 'Raleway'}}paragraph  gutterBottom>GOAL </Typography>
      <Typography variant={'h8'} align={'center'} sx={{color:'#000000',fontFamily: 'Raleway'}} paragraph  gutterBottom >To enable quality, affordable healthcare for everyone, everywhere.</Typography>
        </Box> 
      
      
    </Box>
    </Grid>
    
   
    </Grid>
    </div>
    </Container>
    </div>

        
    );
}
