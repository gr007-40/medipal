import { Button, Card, CardContent, CardMedia, boxDefault, CardActionArea, CardActions } from '@mui/material';

import { useRouter } from 'next/router';
import { postData } from '../utils';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import { ConstructionOutlined } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import details from './servicedetails/[id]';

const theme = createTheme();
export default function pat_p() {
    const [dataResponse, setdataResponse] = useState([]);
    useEffect(() => {
        async function getservice() {
            const apiUrlEndpoint = 'http://localhost:3000/api/getallservice';
            const response = await fetch(apiUrlEndpoint);
            const res = await response.json();
            console.log(await res.services);

            setdataResponse(await res.services);
        }
        getservice();
        console.log(dataResponse)
    }, []);
    return (
        <ThemeProvider theme={theme}>
        
       <CssBaseline />
       <main>
         <Container sx={{ py: 8 }} maxWidth="md">
           {/* End hero unit */}
           <Grid container spacing={3}>
             {(dataResponse || []).map((ser) => (
               <Grid item key={ser} xs={12} sm={6} md={4}>
                 <Card
                   sx={{  width: '30ch',  display: 'flex', flexDirection: 'column', border:'1' }} 
                 >
                   <CardMedia
                     component="img"
                     //image="./square.png"
                     image={ser.image}
                     style={{width:"280px",height:"280px",margin:"auto"}}
                    
                     alt={ser.name}
                   />
                   <CardContent sx={{ flexGrow: 1 }}>
                     <Typography gutterBottom variant="h5" component="h2">
                       {ser.name}
                     </Typography>
                     
                     
                   </CardContent>
                   <CardActions>
                    
                     <Button id={ser.service_id} size="small" href={"./servicedetails/"+ser.service_id}>View Hospitals</Button>
                     
                   </CardActions>
                 </Card>
               </Grid>
             ))}
           </Grid>
         </Container>
       </main>
     </ThemeProvider>
    );
}