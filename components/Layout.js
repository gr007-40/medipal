import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import ResponsiveFooter from './Footer';
import ResponsiveAppBar from './AppBar';

const theme = createTheme();

const Layout = ({children}) => {
    return (
        <div>
            <Header />
            <ThemeProvider theme={theme}>
                <Container
                    disableGutters
                    display='flex'
                    maxWidth='100%'
                    minheight='100%'
                    flexdirection='column'
                    margin={0}
                >
                    <CssBaseline />
                    <ResponsiveAppBar />
                    {children}
                    <ResponsiveFooter />
                </Container>
            </ThemeProvider>
        </div>
    );
};

export default Layout;
