import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { render, unstable_renderSubtreeIntoContainer } from "react-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default class HospitalCards extends React.Component {
  state = {
    loading: true,
    player: [],
    position: [],
  };

  async getPageData() {
    const apiUrlEndpoint = "http://localhost:3000/api/getdata";
    const response = await fetch(apiUrlEndpoint);
    const data = await response.json();
    console.log(data.hospital_list);
    setdataResponse(hospital_list);
    /*const {
      hospitals = hospital_list
        .slice(0, 4)
        .map((item) => item.hospital_list)
        .flat(),
    } = data;

    this.setState({ hospital: hospitals, loading: false });
  }

  render() {
  //  if (this.state.loading) {
   //   return <div>loading...</div>;
   // }

   // if (!this.state.hospital.length) {
//return <div>No hospitals to show :(!</div>;
   // }

    return (
      <div>
        <h4>Hospitals</h4>
            <Grid container spacing={2} style={{paddingTop: "20px", paddingLeft: "50px", paddingRight: "50px"}}>
                 {this.state.hospital.map((item, key) =>{ 
                    return(
                            <Grid item xs={3} key={key}>
                                <Card>
                                <CardMedia
                                    image={"'"+item.image+"'"}
                                    style={{
                                    width: "250px",
                                    height: "300px",
                                    margin: "auto",
                                    }}
                                />
                                <CardContent>
                                    <Typography>
                                    <b>{item.name}</b>
                                    </Typography>
                                    <Typography>
                                    Please click on 'View' to see details.
                                    </Typography>
                                </CardContent>
                                </Card>
                            </Grid>
                    )
                        })
                }
            </Grid>
      </div>
    )
  }
}
