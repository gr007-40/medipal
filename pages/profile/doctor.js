import { Box, Card, CardContent, CardMedia, Container } from "@mui/material";
import Link from "../../components/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { DataGrid } from "@mui/x-data-grid";
import { postData } from "../../utils";

// export async function getServerSideProps() {
//   const doctor = await postData(
//       "http://localhost:3000/api/doctor",
//     {}
//   ).then((doctor) => {
//     console.log(doctor);
//     return doctor;
//   });
//   return { props: {doctor} };
// }

export default function Doctor({/* doctor */}) {
  const doctor = {
  id: 12,
  name: 'Dr. Jonathon Max',
  specialization: 'Neorology',
  degrees: ['MBBS', 'FCPS (Surgery)', 'MS (Neurology)'],
  profilePicture:
      '/am.jpg',
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
    {
      field: "id",
      headerName: "Day",
      sortable: false,
      width: 100,
      editable: false,
    },
    {
      field: "hospital",
      headerName: "Hospital",
      sortable: false,
      width: 200,
      editable: true,
    },
    {
      field: "room",
      headerName: "Room No.",
      type: "number",
      sortable: false,
      width: 100,
      editable: true,
    },
    {
      field: "from",
      headerName: "From",
      sortable: false,
      width: 80,
      editable: true,
    },
    {
      field: "to",
      headerName: "To",
      sortable: false,
      width: 80,
      editable: true,
    },
  ];

  return (
    <Container component="main" maxWidth="xxl" sx={{ mt: 12, mb: 16 }}>
      <Box
        align="center"
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Card
          sx={{
            width: "40ch",
            align: "center",
            ml: "auto",
          }}
        >
          <CardMedia
            component="img"
            image={doctor.profilePicture}
            alt={doctor.name}
          />
          <CardContent align="center" sx={{ background: "#BFD2F8" }}>
            <h2>{doctor.name}</h2>
            <h3>{doctor.specialization}</h3>
            <h4>{doctor.degrees.join(' | ')}</h4>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
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
          </Box>
          </CardContent>
        </Card>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "60ch",
            ml: 10,
            mr: "auto",
          }}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: "row",
              height: "15%",
              background: "#BFD2F8",
            }}
          >
            <CardContent
              sx={{
                ml: "auto",
                mr: "auto",
                fontSize: "1.5rem",
              }}
            >
              Schedule
            </CardContent>
          </Card>
          <Card
            sx={{
              alignItems: "center",
              height: "100%",
              mt: 2,
            }}
          >
            <DataGrid
              rows={doctor.schedule}
              columns={columns}
              hideFooter={true}
              pageSize={7}
              rowsPerPageOptions={[7]}
              sx={{ background: "#BFD2F8" }}
            />
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
