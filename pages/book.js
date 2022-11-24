import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Button, Card, CardContent, CardMedia} from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Image from 'mui-image';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styles1 from '../styles/Home.module.css';
import styles from '../styles/Home.module.css';
import {postData} from '../utils';

export async function getServerSideProps({req, query}) {
    const user = await postData('http://127.0.0.1:3000/api/verify', {
        token: req.cookies.token,
    });
    let patient;
    if (await user.isVerified) {
        patient = await postData('http://127.0.0.1:3000/api/patient', {
            id: user.id,
        });
        console.log(await patient);
    } else {
        console.log(user);
        patient = user;
    }
    const doctor = await postData('http://127.0.0.1:3000/api/doctor', {
        uid: query.doctor_id,
    });
    return {props: {patient, doctor}};
}

export default function book({patient, doctor}) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const date = new Date(data.get('date').toString());
        const today = new Date();
        if (date < today) {
            console.log('you can not book an appointment for the past');
        } else {
            postData('/api/appointment', {
                patient: patient,
                doctor: doctor,
                date: date,
            }).then((message) => {
                console.log(message)
            });
        }
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
                        <Card
                            sx={{
                                width: '40ch',
                                align: 'center',
                                mx: 'auto',
                            }}
                        >
                            <CardMedia
                                component='img'
                                image={doctor.profilePicture || '/USER.png'}
                                alt={doctor.name}
                            />
                            <CardContent align='center'>
                                <h2>{doctor.name}</h2>
                                <h3>{doctor.speciality}</h3>
                                <h4>{(doctor.degrees || []).join(' | ')}</h4>
                            </CardContent>
                        </Card>
                        <Box
                            component='form'
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{
                                mt: 1,
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <TextField
                                margin='normal'
                                required
                                id='date'
                                label='Date'
                                name='date'
                                type='date'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            <Button
                                type='submit'
                                variant='outlined'
                                sx={{ml: 'auto'}}
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
