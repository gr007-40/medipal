import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Layout from "../../components/Layout";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Router from 'next/router'
import Card from "@mui/material/Card";
import { borders } from "@mui/system";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import searchres from "../searchResult/[keyword]";
import { useState } from "react";

export async function getServerSideProps() {
  /*for getting the selected hospital*/
  const apiUrlEndpoint = "http://localhost:3000/api/getsearchinfo";

  //const response = await postData(apiUrlEndpoint,{})
  const response = await fetch(apiUrlEndpoint);

  const resultset = await response.json();
  //console.log(await resdata.hospital_details);

  return { props: { resultset } };
}

const searchbar = ({ resultset }) => {
  const [formInputs, setFormInputs] = useState({});
  const [value, setSearchTerm] = useState("");

  const handleInputs = (event) => {
    setSearchTerm(event.target.value);
    // console.log(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (value) console.log(value);
    else 
    Router.reload(window.location.pathname)
  };

  return (
    <div>
      <Box
        component="form"
        textAlign="center"
        noValidate
        onSubmit={handleSubmit}
        sx={{ mt: 1 }}
      >
        <TextField
          sx={{
            width: 500,
          }}
          margin="normal"
          id="searchbar"
          label="Search for doctors,hospitals..."
          name="search"
          autoComplete="search"
          autoFocus
          onChange={handleInputs}
        />
        <Button
          type="submit"
        
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          href="#results"
        >
          Search
        </Button>
      </Box>

      <div id="results">
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {(resultset.hospital_list || []).map(function (card) {
            if (card.name == value || card.name == value + " Hospital") {
             // console.log("if kaaj kore");
             // console.log("ebar asholei bhitore" + card.name);
              return (
                <Grid item key={card} xs={12} sm={6} md={4}>
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
                      style={{
                        width: "250px",
                        height: "300px",
                        margin: "auto",
                      }}
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
                      <Button
                        id={card.hospital_id}
                        size="small"
                        href={"./hospitaldetails/" + card.hospital_id}
                      >
                        View
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            }
          })}

          {(resultset.doctors || []).map(function (card) {
            console.log(value);
            console.log(card.Specialty)
            if (
              card.name == value ||
              card.hospital_name == value ||
              card.hospital_name == value + " Hospital" ||
              card.name == "Dr. " + value || card.Specialty==value
            ) {
              return (
                <Grid item key={card} xs={12} sm={6} md={4}>
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
                      style={{
                        width: "250px",
                        height: "300px",
                        margin: "auto",
                      }}
                      alt={card.name}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.name}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="h4">
                       {card.hospital_name}
                      </Typography>
                      <Typography>
                        Please click on 'View' to see details.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        id={card.hospital_id}
                        size="small"
                        href={"./hospitaldetails/" + card.hospital_id}
                      >
                        View
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            }
          })}
        </Grid>
        </Container>
      </div>
    </div>
  );
};

export default searchbar;
