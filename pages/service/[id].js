import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {Card, CardContent, CardMedia} from '@mui/material';
import {postData} from "../../utils";

export async function getServerSideProps({res,query}) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    const url = 'http://'+process.env.HOST+':'+process.env.PORT+'/api/service';

    const hospitals = await postData(url,{service_id:query.id})

    return {props: {hospitals}};
}

export default function details({hospitals}) {
    return (
            <main>
                <Container sx={{py: 8}} maxWidth="md">
                    <Typography variant={'h4'} align={'center'} sx={{color: '#000080', fontFamily: 'Raleway'}}
                                gutterBottom>Hospiatls and Laboratories </Typography>
                    <Grid container spacing={3}>
                        {(hospitals || []).map( (hospital)=> {
                                return (
                            <Grid item key={hospital} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{width: '30ch', display: 'flex', flexDirection: 'column', border: '1'}}
                                >
                                    <CardMedia
                                        component="img"
                                        image={"../" + hospital.image}
                                        style={{width: "280px", height: "280px", margin: "auto"}}

                                        alt={hospital.name}
                                    />
                                    <CardContent sx={{flexGrow: 1}}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {hospital.name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                                );
                        })}
                    </Grid>
                </Container>
            </main>
    );
}