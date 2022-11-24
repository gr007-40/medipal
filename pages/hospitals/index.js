/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import Head from "next/head";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import styles from "../../styles/Home.module.css";
import Image from 'mui-image';
import {postData} from "../../utils";

export async function getServerSideProps(){
    const url = "http://"+process.env.HOST+":"+process.env.PORT+"/api/hospitals";
    const hospitals = await postData(url);
    return {props:{hospitals}};
}

export default function hospitals({hospitals}) {
  return (
    <main>
        <Head>
        <title> Hospitals | Medipal</title>
      </Head>
      <Image alt='' src="/loginimg.jpg" className={styles.im}/>
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {(hospitals || []).map((hospital) => (
              <Grid item key={hospital} xs={3} sm={4} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    border: "1",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={hospital.image}
                    style={{ width: "250px", height: "300px", margin: "auto" }}
                    alt={hospital.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {hospital.name}
                    </Typography>
                    <Typography>
                      Please click on `&apos;`View`&apos;` to see details.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button id={hospital.id} size="small" href={"./hospital/"+hospital.id}>
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </main>
  );
}
