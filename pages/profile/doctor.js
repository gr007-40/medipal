import {Box, Button, Card, CardContent, CardMedia, Container, Typography} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';
import {postData} from '../../utils';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import *  as React from "react";

export async function getServerSideProps({req, res}) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    const user = await postData('http://'+process.env.HOST+':'+process.env.PORT+'/api/verify', {
        token: req.cookies.token,
    });
    let doctor;
    if (await user.isVerified && await user.isDoctor) {
        doctor = await postData('http://'+process.env.HOST+':'+process.env.PORT+'/api/doctor', {
            uid: user.id,
        })
    } else {
        doctor = user;
    }
    return {props: {doctor}};
}

export default function Doctor({doctor}) {

    const columns = [
        {
            field: 'day',
            headerName: 'Day',
            sortable: false,
            width: 100,
            editable: false,
        },
        {
            field: 'hospital',
            headerName: 'Hospital',
            sortable: false,
            width: 200,
            editable: true,
        },
        {
            field: 'room',
            headerName: 'Room No.',
            type: 'number',
            sortable: false,
            width: 100,
            editable: true,
        },
        {
            field: 'from',
            headerName: 'From',
            sortable: false,
            width: 80,
            editable: true,
        },
        {
            field: 'to',
            headerName: 'To',
            sortable: false,
            width: 80,
            editable: true,
        },
    ];
    console.log(doctor);
    const [specOpen, setSpecOpen] = React.useState(false);
    const [degOpen, setDegOpen] = React.useState(false);

    function handleSpecOpen() {
        setSpecOpen(true);
    }

    function handleSpecClose() {
        setSpecOpen(false);
    }

    function handleDegOpen() {
        setDegOpen(true);
    }

    function handleDegClose() {
        setDegOpen(false);
    }

    function addSpecialization() {

    }

    function addDegrees() {

    }

    function handleScheduleUpdate() {

    }

    return (
        <Container
            component='main'
            maxWidth='xxl'
            sx={{mt: 12, mb: 16}}
        >
            <Box
                align='center'
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <Card
                    sx={{
                        width: '40ch',
                        align: 'center',
                        ml: 'auto',
                    }}
                >
                    <CardMedia
                        component='img'
                        image={doctor.profilePicture || '/USER.png'}
                        alt={doctor.name}
                    />

                    <CardContent
                        align='center'
                    >
                        {!doctor.profilePicture ?
                            <Button
                                type={'button'}
                                variant={'outlined'}
                                align={'center'}
                            >upload profile picture</Button> : <></>}
                        <h2>{doctor.name}</h2>
                        <h3>
                            {
                                doctor.speciality ||
                                <div>
                                    <Button
                                        type={'button'}
                                        variant={'outlined'}
                                        align={'center'}
                                        onClick={handleSpecOpen}
                                    >Add specialization</Button>
                                    <Dialog open={specOpen} onClose={handleSpecClose}>
                                        <DialogTitle>Specialization</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                Please enter your field of specialization to help others know what you
                                                are good at.
                                            </DialogContentText>
                                            <TextField
                                                autoFocus
                                                margin="dense"
                                                id="specialization"
                                                label="Specialization"
                                                type="text"
                                                fullWidth
                                                variant="standard"
                                            />
                                        </DialogContent>
                                        <DialogActions>
                                            <Button variant={'outlined'} onClick={handleSpecClose}>Cancel</Button>
                                            <Button variant={'outlined'} onClick={addSpecialization}>Submit</Button>
                                        </DialogActions>
                                    </Dialog>
                                </div>}
                        </h3>
                        <h4>
                            {doctor.degrees.join(' | ')}{" "}
                            <div>
                                <Button
                                    type={'button'}
                                    variant={'outlined'}
                                    align={'right'}
                                    sx={{ml: 'auto'}}
                                    onClick={handleDegOpen}
                                >Add Degrees</Button>
                                <Dialog open={degOpen} onClose={handleDegClose}>
                                    <DialogTitle>Degree</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            Add your degrees i.e. MBBS, FCPS, ..etc
                                        </DialogContentText>
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="degree"
                                            label="degree"
                                            type="text"
                                            fullWidth
                                            variant="standard"
                                        />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button variant={'outlined'} onClick={handleDegClose}>Cancel</Button>
                                        <Button variant={'outlined'} onClick={addDegrees}>Submit</Button>
                                    </DialogActions>
                                </Dialog>
                            </div>
                        </h4>
                        {/* <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box align="left" sx={{ mt: 1, flexGrow: 1 }}>
                <Link type="link" href={doctor.socialMedia.linkedIn}>
                  <LinkedInIcon />
                </Link>
                <Link type="link" href={doctor.socialMedia.facebook}>
                  <FacebookIcon />
                </Link>
                <Link type="link" href={doctor.socialMedia.instagram}>
                  <InstagramIcon />
                </Link>
              </Box>
          </Box> */}
                    </CardContent>
                </Card>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '60ch',
                        ml: 10,
                        mr: 'auto',
                    }}
                >
                    <Typography
                        sx={{
                            ml: 'auto',
                            mr: 'auto',
                            fontSize: '1.5rem',
                        }}
                    >
                        Schedule
                    </Typography>
                    <Card
                        sx={{
                            flexGrow: 0,
                            alignItems: 'center',
                            minHeight: '70%',
                            my: 2,
                        }}
                    >
                        <DataGrid
                            rows={doctor.schedule}
                            columns={columns}
                            hideFooter={true}
                            pageSize={7}
                            rowsPerPageOptions={[7]}
                        />
                    </Card>
                    <Button
                        type={'button'}
                        varint={'outlined'}
                        align={'center'}
                        onClick={handleScheduleUpdate}
                    >
                        Update schedule
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
