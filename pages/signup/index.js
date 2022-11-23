import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Link from "../../components/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {postData} from "../../utils";
import {MenuItem} from "@mui/material";
import Router from "next/router";

const genders = [
    {value: "Male", label: "Male"},
    {value: "Female", label: "Female"},
    {value: "Other", label: "Other"},
];
const bloodGroups = [
    {value: "A+", label: "A+"},
    {value: "A-", label: "A-"},
    {value: "B+", label: "B+"},
    {value: "B-", label: "B-"},
    {value: "AB+", label: "AB+"},
    {value: "AB-", label: "AB-"},
    {value: "O+", label: "O+"},
    {value: "O-", label: "O-"},
];

export default function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if (data.get("password") !== data.get("c_password")) {
            console.log("password does not match");
            return;
        }
        if (data.get("acceptTerms") !== "true") {
            console.log("Please accept the terms and conditions to sign up");
            return;
        }
        const user = {
            name: data.get("name"),
            phone: data.get("phone"),
            gender: data.get("gender"),
            bloodGroup: data.get("bloodGroup"),
            age: data.get("age"),
            email: data.get("email"),
            isDoctor: data.get("isDoctor"),
            isHospitalAdmin: data.get("isHospitalAdmin"),
            password: data.get("password"),
        };

        postData("/api/signup", user).then((status) => {
            console.log(status);
            Router.push("/profile").then(_ => {});
        });
    };

    const [gender, setGender] = React.useState("Male");
    const [bloodGroup, setBloodGroup] = React.useState("A+");
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };
    const handleBloodGroupChange = (event) => {
        setBloodGroup(event.target.value);
    };

    return (
        <Container component="main" maxWidth="sm">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <Avatar sx={{m: 1, bgcolor: "secondary.main"}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="given-name"
                                name="name"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="phone"
                                label="Phone Number"
                                name="phone"
                                autoComplete="phone"
                            />
                        </Grid>
                        <Grid item xs={12} sx={{display: "flex", flexDirection: "row"}}>
                            <TextField
                                id="gender"
                                sx={{flexGrow: 1, mr: 1}}
                                select
                                value={gender}
                                onChange={handleGenderChange}
                                label="Gender"
                                name="gender"
                                autoComplete="gender"
                            >
                                {genders.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id="bloodGroup"
                                sx={{flexGrow: 1, mr: 1}}
                                select
                                value={bloodGroup}
                                onChange={handleBloodGroupChange}
                                label="Blood Group"
                                name="bloodGroup"
                                autoComplete="bloodGroup"
                            >
                                {bloodGroups.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id="age"
                                sx={{flexGrow: 1, ml: 1}}
                                label="Age"
                                name="age"
                                type="number"
                                autoComplete="age"
                                InputLabelProps={{shrink: true}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="c_password"
                                label="Confirn Password"
                                type="password"
                                id="c_password"
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid
                            item
                            align="center"
                            xd={6}
                            sx={{display: "flex", flexDirection: "row"}}
                        >
                            <FormControlLabel
                                sx={{flexGrow: 1, mr: 1}}
                                control={
                                    <Checkbox name="isDoctor" value="true" color="primary"/>
                                }
                                label="I am a doctor"
                            />
                            <FormControlLabel
                                sx={{flexGrow: 1, ml: 1}}
                                control={
                                    <Checkbox
                                        name="isHospitalAdmin"
                                        value="true"
                                        color="primary"
                                    />
                                }
                                label="I am a Hospital Administrator"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox name="acceptTerms" value="true" color="primary"/>
                                }
                                label="By Signing up, I accept the terms and conditions for using this website."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Sign Up
                    </Button>
                    <Typography align="center">
                        Already have an account?{" "}
                        <Link href={"/login"} type="link">
                            <Typography sx={{color: "blue", mb: 2}}>Sign in</Typography>
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}
