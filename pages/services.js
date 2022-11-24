import {Button, Card, CardActions, CardContent, CardMedia, Grid} from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {postData} from "../utils";

export async function getServerSideProps({res}){
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
   const url = 'http://'+process.env.HOST+':'+process.env.PORT+'/api/services';
   const services = await postData(url);
    return {props: {services}};
}

export default function services({services}) {
    return (
        <main>
            <Container sx={{py: 8}} maxWidth="md">
                <Grid container spacing={3}>
                    {(services || []).map((service) => (
                        <Grid item key={ser} xs={12} sm={6} md={4}>
                            <Card
                                sx={{width: '30ch', display: 'flex', flexDirection: 'column', border: '1'}}
                            >
                                <CardMedia
                                    component="img"
                                    image={service.image||"/labaid.png"}
                                    style={{width: "280px", height: "280px", margin: "auto"}}

                                    alt={service.name}
                                />
                                <CardContent sx={{flexGrow: 1}}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {service.name}
                                    </Typography>


                                </CardContent>
                                <CardActions>

                                    <Button id={service.id} size="small"
                                            href={"./service/" + service.id}>View Hospitals</Button>

                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
    );
}