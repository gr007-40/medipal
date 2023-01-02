import {Button, Card, CardContent, CardMedia, Grid} from '@mui/material';
import Container from '@mui/material/Container';
import {useState} from "react";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CardActions from "@mui/material/CardActions";
import Link from "../components/Link";
import {postData} from '../utils';

export async function getServerSideProps() {
    const doctors = await postData('http://' + process.env.HOST + ':' + process.env.PORT + '/api/doctors');
    return {props: {doctors}};
}


export default function Admin({doctors}) {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClickClose = () => {
        setOpen(false);
    };

    return (
        <main>
            <Container sx={{py: 8}} maxWidth="md">
                <Typography variant={'h4'} align={'center'} sx={{color: '#000080', fontFamily: 'Raleway'}}
                            gutterBottom>Doctors </Typography>
                <Container sx={{py: 10}} maxWidth="md">
                    <Grid container spacing={4} justify="center">
                        {(doctors || []).map(doctor => (
                            <Grid item key={doctor} xs={12} sm={6} md={4}>
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
                                        image={doctor.image || '/USER.png'}
                                        style={{
                                            width: "280px",
                                            height: "280px",
                                            margin: "auto",
                                        }}
                                        alt={doctor.name}
                                    />
                                    <CardContent sx={{flexGrow: 1}}>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                        >
                                            {doctor.name}
                                        </Typography>
                                        <Typography
                                            gutterBottom
                                            variant="h6"
                                            component="h4"
                                        >
                                            {doctor.speciality}
                                        </Typography>
                                        <Typography>
                                            Please click on &apos;View&apos; to see profile.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link
                                            size="small"
                                            Type={'button'}
                                            type={'button'}
                                            variant={'outlined'}
                                            href={"/doctor/" + doctor.userID}
                                        >
                                            View
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Card
                    sx={{width: '30ch', display: 'flex', flexDirection: 'column', border: '1'}}

                >

                    <CardMedia
                        component="img"
                        image="./USER.png"
                        style={{width: "280px", height: "280px", margin: "auto"}}
                    />

                    <CardContent sx={{flexGrow: 1}}>
                        <Button variant="outlined" onClick={handleClickOpen}>
                            ADD DOCTOR
                        </Button>
                        <Dialog open={open}>
                            <DialogTitle>Add Doctor</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    To add doctor enter the details below
                                </DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Full Name"
                                    type="name"
                                    fullWidth
                                    variant="standard"
                                />

                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="specialization"
                                    label="Specialization"
                                    type="specialization"
                                    fullWidth
                                    variant="standard"
                                />

                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClickClose}>ADD</Button>
                            </DialogActions>
                        </Dialog>


                    </CardContent>

                </Card>

            </Container>
        </main>
    );
}