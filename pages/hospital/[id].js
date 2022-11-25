import * as React from "react";
import Link from "../../components/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Image from "mui-image";
import {postData} from "../../utils";


export async function getServerSideProps({query}) {
    const hospital_id = query.id;
    const url1 = "http://" + process.env.HOST + ':' + process.env.PORT + "/api/hospital";
    const {hospital, doctors} = await postData(url1, {hospital_id: hospital_id});
    return {props: {hospital, doctors}};
}

export default function details({hospital, doctors}) {
    return (
        <Container maxWidth="lg">
            <main>
                <Grid item xs={12} md={4}></Grid>
                <Grid container spacing={5} sx={{mt: 3}}>
                    <Image src={hospital.image} alt={hospital.name}/>

                    <h1>{hospital.name}</h1>

                    <Typography>{hospital.description}</Typography>
                    <Typography>
                        Please click
                        <Link href={hospital.link} variant="body2">
                            {" "}
                            here{" "}
                        </Link>
                        to visit the official website.
                    </Typography>

                    <Divider
                        style={{width: "100%"}}
                        sx={{borderBottomWidth: 8}}
                    >
                        <h2>MEET OUR DOCTORS</h2>
                    </Divider>
                    <Container sx={{py: 10}} maxWidth="md">
                        <Grid container spacing={4} justify="center">
                            {(doctors || []).map(doctor => (
                                <Grid item key={doctor} xs={12} sm={6} md={4}>
                                    <Card
                                        sx={{
                                            display: "flex",
                                            height: "60ch",
                                            width: "30ch",
                                            flexDirection: "column",
                                            border: "1",
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={doctor.profilePicture}
                                            style={{
                                                width: "280px",
                                                height: "280px",
                                                margin: "auto",
                                            }}
                                            alt={doctor.name}
                                        />
                                        <CardContent sx={{flexGrow: 1}}>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="h2"
                                            >
                                                {doctor.name}
                                            </Typography>
                                            <Typography
                                                gutterBottom
                                                variant="h6"
                                                component="h4"
                                            >
                                                {doctor.speciality}
                                            </Typography>
                                            <Typography>
                                                Please click on &apos;View&apos; to see profile.
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Link
                                                size="small"
                                                Type={'button'}
                                                type={'button'}
                                                variant={'outlined'}
                                                href={"/doctor/" + doctor.userID}
                                            >
                                                View
                                            </Link>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Grid>
            </main>
        </Container>
    );
}
