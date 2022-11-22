/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Head from "next/head";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import { borders } from "@mui/system";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import styles from "../../styles/Home.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ConstructionOutlined } from "@mui/icons-material";

const theme = createTheme();

export default function hospitals() {
  const [dataResponse, setdataResponse] = useState([]);
  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = "http://localhost:3000/api/gethospitallist";

      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      console.log(await res.hospital_list);
      // console.log("ami aloo0")

      setdataResponse(await res.hospital_list);
    }
    getPageData();
    //console.log("ami aloo1")

    console.log(dataResponse);
    //console.log("ami aloo2")
  }, []);
  return (
    <ThemeProvider theme={theme}>
        <Head>
        <title> Hospital lists | Medipal</title>
      </Head>
      <img src="/loginimg.jpg" className={styles.im}></img>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {(dataResponse || []).map((card) => (
              <Grid item key={card} xs={3} sm={4} md={4}>
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
                //image='square.png'
                    image={card.image}
                    style={{ width: "250px", height: "300px", margin: "auto" }}
                    alt={card.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      Please click on 'View' to see details.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button id={card.hospital_id} size="small" href={"./hospitaldetails/"+card.hospital_id}>
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
