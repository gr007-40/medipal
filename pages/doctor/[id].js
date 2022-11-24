import {Card, CardContent, CardMedia, Typography} from '@mui/material';
import Link from '../../components/Link';
import {postData} from '../../utils';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import {DataGrid} from '@mui/x-data-grid';

export async function getServerSideProps({res,query}) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    const uid = query.id;
    const doctor = await postData('http://' + process.env.HOST + ':' + process.env.PORT+"/api/doctor", {
        uid: uid,
    });
    return {props: {doctor}};
}

const profile = ({doctor}) => {

    const columns = [
        {field: 'day', headerName: 'Day', sortable: false, width: 100},
        {
            field: 'hospital',
            headerName: 'Hospital',
            sortable: false,
            width: 200,
        },
        {
            field: 'room',
            headerName: 'Room No.',
            type: 'number',
            sortable: false,
            width: 100,
        },
        {field: 'from', headerName: 'From', sortable: false, width: 80},
        {field: 'to', headerName: 'To', sortable: false, width: 80},
    ];

    return (
        <Container
            component='main'
            maxWidth='xxl'
            sx={{mt: 12, mb: 16}}
        >
            <CssBaseline/>
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
                    <CardContent align='center'>
                        <h2>{doctor.name}</h2>
                        <h3>{doctor.speciality}</h3>
                        <h4>{(doctor.degrees || []).join(' | ')}</h4>
                        <Box sx={{display: 'flex', flexDirection: 'row'}}>
                            {/*<Box
                                align='left'
                                sx={{ mt: 1, flexGrow: 1 }}
                            >
                                <Link
                                    type='link'
                                    href={doctor.socialMedia.linkedIn}
                                >
                                    <LinkedInIcon />
                                </Link>
                                <Link
                                    type='link'
                                    href={doctor.socialMedia.facebook}
                                >
                                    <FacebookIcon />
                                </Link>
                                <Link
                                    type='link'
                                    href={doctor.socialMedia.instagram}
                                >
                                    <InstagramIcon />
                                </Link>
                            </Box>*/}
                            <Link
                                href={'/book?doctor_id=' + doctor.userID}
                                Type={'button'}
                                type='button'
                                variant='outlined'
                                align='right'
                                sx={{ml: 'auto'}}
                            >
                                Book Appointment
                            </Link>
                        </Box>
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
                            alignItems: 'center',
                            height: '100%',
                            mt: 2,
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
                </Box>
            </Box>
        </Container>
    );
};

export default profile;
