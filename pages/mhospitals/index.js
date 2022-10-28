import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import { borders } from '@mui/system';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import styles from "../../styles/Home.module.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const cards = [1];

const theme = createTheme();

export default function hospitals() {
  const handleView = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  }

  return (
    <ThemeProvider theme={theme}>
       <img src="/loginimg.jpg" className={styles.im}></img>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', border:'1' }} 
                >
                  <CardMedia
                    component="img"
                    image="../square.png"
                    alt="hospital"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      SQUARE HOSPITAL
                    </Typography>
                    <Typography>
                      Please click on 'View' to see details.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href='./hospitalDetails'>View</Button>
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