import * as React from 'react';
import Router from 'next/router';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '../../components/Link';
import Image from 'mui-image';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {postData} from '../../utils';

export default function logIn() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const user_credentials = {
            email: data.get('email'),
            password: data.get('password'),
        };

        const session = await postData('/api/login', user_credentials).then(
            (session) => {
                return session;
            }
        );
        if (await session.success) {
            console.log('login successfull');
            postData('/api/verify', {}).then((user) => {
                console.log(user);
                if (user.isVerified) {
                    console.log('user verified');
                    if (user.isDoctor) {
                        Router.push('profile/doctor');
                    } else {
                        Router.push('profile/patient');
                    }
                } else {
                    console.log('user not verified');
                }
            });
        } else {
            console.log('login failed');
        }
    };

    return (
        <Grid
            container
            component='main'
            sx={{height: '100vh'}}
        >
            <CssBaseline/>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundColor: (t) =>
                        t.palette.mode === 'light'
                            ? t.palette.grey[50]
                            : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Image
                    alt=''
                    src='/doctor-login.jpg'
                />
            </Grid>

            <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
            >
                <Box
                    sx={{
                        my: 14,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: '#040420'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography
                        component='h1'
                        variant='h5'
                        sx={{fontWeight: 'bold'}}
                    >
                        WELCOME TO MEDIPAL
                    </Typography>
                    <Box
                        component='form'
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{mt: 1}}
                    >
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            id='email'
                            label='Email Address'
                            name='email'
                            autoComplete='email'
                            autoFocus
                        />
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            name='password'
                            label='Password'
                            type='password'
                            id='password'
                            autoComplete='current-password'
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    value='remember'
                                    color='primary'
                                />
                            }
                            label='Remember me'
                        />
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            sx={{mt: 3, mb: 2}}
                        >
                            Submit
                        </Button>
                        <Grid container>
                            <Grid
                                item
                                xs
                            >
                                <Link
                                    href='./forgot_password'
                                    variant='body2'
                                >
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link
                                    href='#'
                                    variant='body2'
                                >
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}
