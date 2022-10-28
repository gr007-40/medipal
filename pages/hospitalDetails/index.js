import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from '../MainFeaturedPost';
import Main from '../Main'
import Sidebar from '../Sidebar';
import post1 from '../blog-post.1.md';



const mainFeaturedPost = {
  title: 'Square Hospital',
};

const posts = [post1];

const sidebar = {
 image:'./squareb.png'
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
        
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="Square Hospital" posts={posts} />
            <Sidebar
              
              image={sidebar.image}
            />
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}