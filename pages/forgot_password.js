import styles from "../styles/Home.module.css";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Image from 'mui-image';
import Typography from "@mui/material/Typography";

const forgot_password = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };
    return (
        <div>
            <Image alt={''} src="/loginimg.jpg" className={styles.im}/>
            <Box
                component="form"
                textAlign="center"
                noValidate
                onSubmit={handleSubmit}
                sx={{mt: 1}}
            >
                <Typography component="h3" variant="h6" sx={{fontWeight: "bold"}} pos>
                    ENTER YOUR EMAIL
                </Typography>
                <TextField
                    sx={{

                        width: 500
                    }}
                    margin="normal"
                    required
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
            </Box>
            <Box textAlign="center">
                <Button type="submit" variant="contained" sx={{mt: 3, mb: 2}}>
                    Submit
                </Button>
            </Box>
        </div>
    );
};

export default forgot_password;
