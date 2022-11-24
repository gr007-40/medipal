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


const theme = createTheme();
export default function admin_firstpage() {
    return (
        <ThemeProvider theme={theme}>

            <CssBaseline />
            <main>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Typography variant={'h4'} align={'center'} sx={{ color: '#000080', fontFamily: 'Raleway' }} gutterBottom>Welcome to Medipal</Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={4}>
                             <Card
                        sx={{ width: '100ch', display: 'flex', flexDirection: 'column', border: '1' }}

                    >

                        <CardMedia
                            component="img"
                            image="./hp5 - Copy.jpg"
                            //image={ser.profilePicture}
                            style={{ width: "1000px", height: "280px", margin: "auto" }}

                        //alt={ser.name}
                        />

                        <CardContent sx={{ flexGrow: 1 }}>
                            <Button variant="outlined" href={"/admin"}>
                                ADD DOCTOR
                            </Button>
                            




                        </CardContent>

                    </Card>
                        </Grid>
                        
                    </Grid>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={6} md={6}>
                             <Card
                        sx={{ width: '100ch', display: 'flex', flexDirection: 'column', border: '1' }}

                    >

                        <CardMedia
                            component="img"
                            image="./blood.jpg"
                            //image={ser.profilePicture}
                            style={{ width: "1000px", height: "280px", margin: "auto" }}

                        //alt={ser.name}
                        />

                        <CardContent sx={{ flexGrow: 1 }}>
                            <Button variant="outlined" href={"/add_doc"}>
                                ADD SERVICES
                            </Button>
                            




                        </CardContent>

                    </Card>
                        </Grid>
                        
                    </Grid>

                </Container>
            </main>
        </ThemeProvider>
    );
}
