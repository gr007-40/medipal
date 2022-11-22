import * as React from "react";
import Link from "@mui/material/Link";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export async function getServerSideProps() {
  /*for getting the selected hospital*/
  const apiUrlEndpoint = "http://localhost:3000/api/gethospitaldetails";

  //const response = await postData(apiUrlEndpoint,{})
  const response = await fetch(apiUrlEndpoint);

  const resdata = await response.json();
  //console.log(await resdata.hospital_details);

  /*for loading the doctors list*/
  const apiUrlEndpoint2 = "http://localhost:3000/api/getdoctorslist";

  //const response = await postData(apiUrlEndpoint,{})
  const docresponse = await fetch(apiUrlEndpoint2);

  const docsdata = await docresponse.json();
  //console.log(docsdata.doctors);
  return { props: { resdata, docsdata } };
}

export default function details({ resdata, docsdata }) {
  const router = useRouter();
  const { id } = router.query;
  // console.log("ekhane"+id);
  //console.log(id);
  //console.log(resdata.hospital_details);
  return (
    <div>
      {(resdata.hospital_details || []).map(function (hos) {
        if (hos.hospital_id == id) {
          //console.log("ebar asholei bhitore"+hos.hospital_id);

          return (
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Container maxWidth="lg">
                <main>
                  <Grid item xs={12} md={4}></Grid>
                  <Grid container spacing={5} sx={{ mt: 3 }}>
                    <img src={"/" + hos.image} alt={hos.name}></img>

                    <h1>{hos.name}</h1>

                    <Typography>{hos.hdescription}</Typography>
                    <Typography>
                      Please click
                      <Link href={hos.website_link} variant="body2">
                        {" "}
                        here{" "}
                      </Link>
                      to visit the official website.
                    </Typography>

                    <Divider
                      style={{ width: "100%" }}
                      sx={{ borderBottomWidth: 8 }}
                    >
                      <h2>MEET OUR DOCTORS</h2>
                    </Divider>
                    <Container sx={{ py: 10 }} maxWidth="md">
                      <Grid container spacing={4} justify="center">
                        {(docsdata.doctors || []).map(function (doc) {
                          // console.log(doc.name)
                          if (doc.hospital_code == id) {
                            console.log(doc.name);
                            return (
                              <div>
                                <Grid item key={doc} xs={12} sm={6} md={4}>
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
                                      //image="./square.png"
                                      image={"/" + doc.image}
                                      style={{
                                        width: "280px",
                                        height: "280px",
                                        margin: "auto",
                                      }}
                                      alt={doc.name}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                      <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                      >
                                        {doc.name}
                                      </Typography>
                                      <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="h4"
                                      >
                                        {doc.Specialty}
                                      </Typography>
                                      <Typography>
                                        Please click on 'View' to see profile.
                                      </Typography>
                                    </CardContent>
                                    <CardActions>
                                      <Button
                                        id={doc.hospital_id}
                                        size="small"
                                        href="/"
                                      >
                                        View
                                      </Button>
                                    </CardActions>
                                  </Card>
                                </Grid>
                              </div>
                            );
                          }
                        })}
                      </Grid>
                    </Container>
                  </Grid>
                </main>
              </Container>
            </ThemeProvider>
            //<h1>{id}</h1>
          );
        }
      })}
    </div>
  );

  //console.log(dataResponse);
}
