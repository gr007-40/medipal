import * as React from "react";
import Link from "@mui/material/Link";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import { useRouter } from "next/router";
import { Button, Card, CardContent, CardMedia, boxDefault, CardActionArea, CardActions } from '@mui/material';
import { useEffect, useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { HomeSharp } from "@mui/icons-material";

const theme = createTheme();



  export async function getServerSideProps() {
    const apiUrlEndpoint = "http://localhost:3000/api/getservicedetails";

    //const response = await postData(apiUrlEndpoint,{})
    const response = await fetch(apiUrlEndpoint)

    const resdata = await response.json();
    console.log(await resdata.service_details);
    return {props:{resdata}};
    // console.log("ami aloo0")

    //(await res.service_list);
  }

export default function details({resdata}) {
  const router=useRouter();
  const { id }=router.query;
    console.log("ekhane"+id);
    console.log(id);
    console.log(resdata.service_details);
    return (
     
      
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                
                    <main>
                     
                    
                        
                         <Container sx={{ py: 8 }} maxWidth="md">
                         <Typography variant={'h4'} align={'center'} sx={{ color: '#000080', fontFamily: 'Raleway' }} gutterBottom>Hospiatls and Laboratories </Typography>
                          <Grid container spacing={3}>
                            {(resdata.service_details || []).map(function(hos) {
                              // console.log(hos.name)
                              if(hos.service_id==id) {
                               // console.log(hos.name);
                                return (
                                  
                                    <Grid item key={hos} xs={12} sm={6} md={4}>
                                      <Card
                                    sx={{ width: '30ch', display: 'flex', flexDirection: 'column', border: '1' }}
                                >
                                    <CardMedia
                                        component="img"
                                        //image="./square.png"
                                        image={"../"+hos.image}
                                        style={{ width: "280px", height: "280px", margin: "auto" }}

                                        alt={hos.name}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {hos.name}
                                        </Typography>
                                       


                                    </CardContent>

                                </Card>
                                    </Grid>
                                
                                );
                              }
                            })}
                          </Grid>
                        </Container>
                     
                    </main>
               
                </ThemeProvider>
               
                
          
       
      );
  }