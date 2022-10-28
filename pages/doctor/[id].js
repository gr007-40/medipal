/* eslint-disable react-hooks/rules-of-hooks */
import { Card, CardContent, CardMedia } from '@mui/material';
import Link from '../../components/Link';
import { useRouter } from 'next/router';
import { postData } from '../../utils';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { DataGrid } from '@mui/x-data-grid';

const profile = () => {
    const router = useRouter();
    const id = router.query.id;
    if (id) {
        postData('/api/doctor').then((doctor) => {
            console.log(doctor);
        });
    }
    const doctor = {
        id: 12,
        name: 'Dr. Jonathon Max',
        specialization: 'Neorology',
        degrees: ['MBBS', 'FCPS (Surgery)', 'MS (Neurology)'],
        profilePicture:
            '/image/doctor.jpg',
        socialMedia: {
            facebook: 'https://facebook.com/jonathon.max',
            linkedIn: 'https://linkedin.com/jonathon',
            instagram: 'https://instagram.com/max',
        },
        schedule: [
            {
                id: 'Saturday',
                hospital: 'ABC hospital',
                room: 410,
                from: '10:30',
                to: '17:20',
            },
            {
                id: 'Sunday',
                hospital: 'ABC hospital',
                room: 410,
                from: '10:30',
                to: '17:20',
            },
            {
                id: 'Monday',
                hospital: 'ABC hospital',
                room: 410,
                from: '10:30',
                to: '17:20',
            },
            {
                id: 'Tuesday',
                hospital: 'ABC hospital',
                room: 410,
                from: '10:30',
                to: '17:20',
            },
            {
                id: 'Wednesday',
                hospital: 'ABC hospital',
                room: 410,
                from: '10:30',
                to: '17:20',
            },
            {
                id: 'Thursday',
                hospital: 'ABC hospital',
                room: 410,
                from: '10:30',
                to: '17:20',
            },
            {
                id: 'Friday',
                hospital: 'ABC hospital',
                room: 410,
                from: '10:30',
                to: '17:20',
            },
        ],
    };

    const columns = [
        { field: 'id', headerName: 'Day', sortable: false, width: 100 },
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
        { field: 'from', headerName: 'From', sortable: false, width: 80 },
        { field: 'to', headerName: 'To', sortable: false, width: 80 },
    ];

    return (
        <Container
            component='main'
            maxWidth='xxl'
            sx={{ mt: 12, mb: 16 }}
        >
            <CssBaseline />
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
                        image={doctor.profilePicture}
                        alt={doctor.name}
                    />
                    <CardContent
                        align='center'
                        sx={{ background: '#BFD2F8' }}
                    >
                        <h2>{doctor.name}</h2>
                        <h3>{doctor.specialization}</h3>
                        <h4>{doctor.degrees.join(' | ')}</h4>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Box
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
                            </Box>
                            <Link
                                href={'/book'}
                                Type={'button'}
                                type='button'
                                variant='outlined'
                                align='right'
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
                    <Card
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            height: '15%',
                            background: '#BFD2F8',
                        }}
                    >
                        <CardContent
                            sx={{
                                ml: 'auto',
                                mr: 'auto',
                                fontSize: '1.5rem',
                            }}
                        >
                            Schedule
                        </CardContent>
                    </Card>
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
                            sx={{ background: '#BFD2F8' }}
                        />
                    </Card>
                </Box>
            </Box>
        </Container>
    );
};

export default profile;
