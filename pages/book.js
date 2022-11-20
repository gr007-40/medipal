import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styles from '../styles/Homepage.module.css';
import styles1 from '../styles/Home.module.css';
import Image from 'mui-image';

export default function book() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('name'),
            gender: data.get('gender'),
            phone: data.get('phone'),
            date: data.get('date'),
        });
    };

    return (
        <div className={styles1.page}>
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
                        src='hp2.jpg'
                        classNameName={styles.is}
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
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            component='h1'
                            variant='h5'
                            sx={{fontWeight: 'bold'}}
                        >
                            BOOK AN APPOINTMENT
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
                                id='name'
                                label='Name'
                                name='name'
                                autoComplete='name'
                                autoFocus
                            />
                            <TextField
                                margin='normal'
                                required
                                fullWidth
                                id='gender'
                                label='Gender'
                                name='gender'
                                autoComplete='gender'
                                autoFocus
                            />
                            <TextField
                                margin='normal'
                                required
                                fullWidth
                                id='phone'
                                label='Phone'
                                name='phone'
                                autoComplete='phone'
                                autoFocus
                            />

                            <TextField
                                margin='normal'
                                required
                                id='date'
                                label='Date'
                                //name="date"
                                type='date'
                                sx={{width: 220}}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            <Button
                                type='submit'
                                fullWidth
                                variant='contained'
                                sx={{mt: 3, mb: 2}}
                            >
                                Confirm appointment
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}
