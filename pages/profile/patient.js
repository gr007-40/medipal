/* eslint-disable react-hooks/rules-of-hooks */
import { Button, Card, CardContent, CardMedia } from '@mui/material';
import { useRouter } from 'next/router';
import { postData } from '../../utils';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { DataGrid } from '@mui/x-data-grid';

const profile = () => {
    const router = useRouter();
    const id = router.query.id;
    if (id) {
        postData('/api/patient').then((patient) => {
            console.log(patient);
        });
    }
    const patient = {
        id: 12,
        name: 'Alexander Rossario',
        age :22,
        gender: 'Male',
        blood: 'A+',
        
        profilePicture:
            '/image/patient.png',
        
        schedule: [
            {
                
                id : new Date('10/30/2022').toDateString(),
                /*id : document.write(formatDate(d)),*/
                
                hospital: 'Square Hospital',
                doctor:'Dr.Max',
            },
            {
                id : new Date('11/12/2022').toDateString(),
                hospital: 'LABAID',
                doctor:'Dr.Sam',
            },
            {
                id : new Date('12/12/2022').toDateString(),
                hospital: 'United',
                doctor:'Dr.May',
            },
           
        ],
    };

    const columns = [
        { field: 'id', headerName: 'Date', sortable: false, width: 150 },
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
                        /*for the profile*/
                        width: '30ch',
                        align: 'center',
                        ml: 'auto',
                        
                    }}
                >
                    <CardMedia
                        component='img'
                        image={patient.profilePicture}
                        /*alt={patient.name}*/
                        
                    />
                    <CardContent
                        align='center'
                        sx={{ background: '#BFD2F8' }}
                    >
                        <h3>{patient.name}</h3>
                        <h4>Age : {patient.age} years</h4>
                        <h4>Gender : {patient.gender} </h4>
                        <h4>Blood Group : {patient.blood} </h4>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Box
                                align='left'
                                sx={{ mt: 1, flexGrow: 1 }}
                            >
                               
                            </Box>
                            
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
                        sx={{/*for the text*/
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
                            rows={patient.schedule}
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
