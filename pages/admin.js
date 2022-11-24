import { Button, Card, CardContent, CardMedia, boxDefault, CardActionArea, CardActions } from '@mui/material';

import { useRouter } from 'next/router';
import { postData } from '../utils';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { ConstructionOutlined, ControlPointSharp, Delete } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Router from 'next/router';
//import { postData } from '../utils';


const theme = createTheme();

export default function pat_p() {
    const [dataResponse, setdataResponse] = useState([]);
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
  /*    const handleClose = () => {
        //TODO: get name from form popup
        //asume name
        const name= 'adsfa';
        postData('/api/addDoctor',{name:name});
        setOpen(false);
      };*/
    useEffect(() => {
        async function getservice() {
            const apiUrlEndpoint = 'http://localhost:3000/api/getadmin';
            const response = await fetch(apiUrlEndpoint);
            const res = await response.json();
            console.log(await res.services);

            setdataResponse(await res.services);
        }
        getservice();
        console.log(dataResponse)
    }, []);
    return (
        <ThemeProvider theme={theme}>

            <CssBaseline />
            <main>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Typography variant={'h4'} align={'center'} sx={{ color: '#000080', fontFamily: 'Raleway' }} gutterBottom>Doctors </Typography>
                    <Grid container spacing={3}>
                        {(dataResponse || []).map((ser) => (
                            <Grid item key={ser} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ width: '30ch', display: 'flex', flexDirection: 'column', border: '1' }}
                                >
                                    <CardMedia
                                        component="img"
                                        //image="./square.png"
                                        image={ser.image}
                                        style={{ width: "280px", height: "280px", margin: "auto" }}

                                        alt={ser.name}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {ser.name}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="h2">
                                            {ser.specialization}
                                        </Typography>



                                    </CardContent>

                                </Card>

                            </Grid>

                        ))}
                    </Grid>
                    <Card
                        sx={{ width: '30ch', display: 'flex', flexDirection: 'column', border: '1' }}

                    >

                        <CardMedia
                            component="img"
                            image="./USER.png"
                            //image={ser.profilePicture}
                            style={{ width: "280px", height: "280px", margin: "auto" }}

                        //alt={ser.name}
                        />

                        <CardContent sx={{ flexGrow: 1 }}>
                            <Button variant="outlined" href={"/add_doc"}>
                                ADD DOCTOR
                            </Button>
                            




                        </CardContent>

                    </Card>

                </Container>
            </main>
        </ThemeProvider>
    );
}