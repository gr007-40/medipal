import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from '@mui/material/Typography';
import styles from "../styles/Home.module.css";
import styles1 from "../styles/Home.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { postData } from '../utils/d_a';
import Image from 'mui-image';
import Router from 'next/router';
const theme = createTheme();
export default function add_doc() {
  const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
     
      const doctor = {
          name: data.get("name"),
         Speciality: data.get("Speciality"),
          hospital_code: data.get("hospital_code"),
          hospital_name: data.get("hospital_name"),
          image: data.get("image"),
        
      };

      postData("/api/add_doc", doctor).then((status) => {
          console.log(status);
         Router.push("/prac").then(_ => {});
      });
  };
  

    return (
        <ThemeProvider theme={theme}>
          <Grid container component="main" sx={{ height: "100vh" }}>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundColor: (t) =>
                  t.palette.mode === "light"
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img src="/hp5.jpg" className={styles.imlg}></img>
            </Grid>
    
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                
                <Typography component="h1" variant="h5" sx={{ fontWeight: "bold" }}>
                Enter the details below
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    
                   autoComplete="name"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="Speciality"
                    label="Speciality"
                    type="Speciality"
                    id="Speciality"
                   //autoComplete="current-speciality"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="hospital_code"
                    label="Hospital Code"
                    type="hospital_code"
                    id="hospital_code"
                   // autoComplete="current-speciality"
                  />
    
                  
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Submit
                  </Button>
                  <Grid container>
                    
                    
                  </Grid>
                 
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      );
    }
    