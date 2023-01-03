import * as React from "react";
import {useState} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Router from 'next/router'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

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
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setSearchTerm] = useState("");

    const handleInputs = (event) => {
        setSearchTerm(event.target.value);
        // console.log(value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // if (!value)
        //     Router.reload()
    };

    return (
        <div>
            <Box
                component="form"
                textAlign="center"
                noValidate
                onSubmit={handleSubmit}
                sx={{   mt: 1 }}
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
                            if (value&&(card.name.toLowerCase().includes(value.toLowerCase()))) {
                                console.log(card)
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
                                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                    Please click on 'View' to see details.
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button
                                                    id={card.id}
                                                    size="small"
                                                    href={"./hospital/" + card.id}
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
                            // console.log(value);
                            // console.log(card)
                            if (
                                value&&(card.name.toLowerCase().includes(value.toLowerCase())||(card.speciality!=null?card.speciality.toLowerCase().includes(value.toLowerCase()):false))
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
                                                image={card.profilePicture||'USER.png'}
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
                                                {/*<Typography gutterBottom variant="h6" component="h4">*/}
                                                {/*    {card.name}*/}
                                                {/*</Typography>*/}
                                                <Typography>
                                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                    Please click on 'View' to see details.
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button
                                                    id={card.id}
                                                    size="small"
                                                    href={"./doctor/" + card.id}
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
