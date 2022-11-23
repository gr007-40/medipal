/* eslint-disable react-hooks/rules-of-hooks */
import {Card, CardContent, CardMedia} from '@mui/material';
import {postData} from '../../utils';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import {DataGrid} from '@mui/x-data-grid';

export async function getServerSideProps({req, res}) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    const user = await postData('http://localhost:3000/api/verify', {
        token: req.cookies.token,
    });
    let patient;
    if (await user.isVerified) {
        patient = await postData('http://localhost:3000/api/patient', {
            id: await user.id,
        });
    } else {
        patient = user;
    }
    return {props: {patient}};
}

const profile = ({patient}) => {

    const columns = [
        {field: 'day', headerName: 'Day', sortable: false, width: 150},
        {
            field: 'hospital',
            headerName: 'Hospital',
            sortable: false,
            width: 200,
        },
        {
            field: 'doctor',
            headerName: 'Doctor',
            /* type: 'number',*/
            sortable: false,
            width: 100,
        },
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
                        /*for the profile*/
                        width: '30ch',
                        align: 'center',
                        ml: 'auto',
                    }}
                >
                    <CardMedia
                        component='img'
                        image={patient.profilePicture || '/USER.png'}
                        /*alt={patient.name}*/
                    />
                    <CardContent
                        align='center'
                    >
                        <h3>{patient.name}</h3>
                        <h4>Age : {patient.age} years</h4>
                        <h4>Gender : {patient.gender} </h4>
                        <h4>Blood Group : {patient.blood} </h4>
                        <Box sx={{display: 'flex', flexDirection: 'row'}}>
                            <Box
                                align='left'
                                sx={{mt: 1, flexGrow: 1}}
                            ></Box>
                        </Box>
                    </CardContent>
                </Card>
                <Box
                    sx={{
                        /*schedule*/
                        display: 'flex',
                        flexDirection: 'column',
                        width: '50ch',
                        ml: 10,
                        mr: 'auto',
                    }}
                >
                    <Card
                        sx={{
                            /*for the text*/ display: 'flex',
                            flexDirection: 'row',
                            height: '15%',
                        }}
                    >
                        <CardContent
                            sx={{
                                ml: 'auto',
                                mr: 'auto',
                                fontSize: '1.3rem',
                            }}
                        >
                            Upcoming Appointment
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            /*fixing the height of the lower card*/
                            alignItems: 'center',
                            height: '100%',
                            mt: 2,
                        }}
                    >
                        <DataGrid
                            rows={patient.appointments}
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
