import {Box, Card, CardContent, CardMedia, Container, Typography} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';
import {postData} from '../../utils';
import Link from '../../components/Link'

export async function getServerSideProps(context) {
    const user = await postData('http://localhost:3000/api/verify', {
        token: context.req.cookies.token,
    });
    let doctor;
    if (await user.isVerified && await user.isDoctor) {
        doctor = await postData('http://localhost:3000/api/doctor', {
            id: user.id,
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
                        sx={{background: '#BFD2F8'}}
                    >
                        {!doctor.profilePicture ?
                            <Link
                                type={'button'}
                                Type={'button'}
                                variant={'outlined'}
                                href={'#'}
                                align={'center'}
                            >upload profile picture</Link> : <></>}
                        <h2>{doctor.name}</h2>
                        <h3>
                            {
                                doctor.specialization ||
                                <Link
                                    href={'#'}
                                    Type={'button'}
                                    type={'button'}
                                    variant={'outlined'}
                                    align={'center'}
                                >Add specialization</Link>}
                        </h3>
                        <h4>
                            {doctor.degrees.join(' | ')}{" "}
                            <Link
                                href={'#'}
                                Type={'button'}
                                type={'button'}
                                variant={'outlined'}
                                align={'right'}
                                sx={{ml: 'auto'}}
                            >Add Degrees</Link>
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
                            sx={{background: '#BFD2F8'}}
                        />
                        <Link
                            href={'#'}
                            type={'button'}
                            Type={'button'}
                            varint={'outlined'}
                            align={'center'}
                        >
                            Update schedule
                        </Link>
                    </Card>
                </Box>
            </Box>
        </Container>
    );
}
