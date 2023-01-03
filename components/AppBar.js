import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from './Link';
import {postData} from "../utils";
import {deleteCookie, getCookie} from "cookies-next";
import Button from "@mui/material/Button";
import Router from "next/router";

const MEDIPAL = () => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                display: {xs: 'none', md: 'flex'},
            }}
        >
            <Link
                Type={'button'}
                type='button'
                href='/'
            ><>
                <Typography
                    variant='h5'
                    noWrap
                    component='a'
                    sx={{
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: '#BFD2F8',
                    }}
                >
                    MEDI
                </Typography>

                <Typography
                    variant='h5'
                    noWrap
                    component='a'
                    sx={{
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                    }}
                >
                    PAL
                </Typography></>
            </Link>
        </Box>
    );
};

const session = await postData('http://localhost:3000/api/verify', {token: getCookie('token')})

function handleLogout() {
    deleteCookie('token');
    Router.reload();
    Router.push('/');
}

function Status() {
    const pages = [
        {url: '/signup', name: 'SIGNUP'},
        {url: '/login', name: 'LOGIN'},
    ]
    if (session.isVerified === false) {
        return (
            <Box>
                {pages.map((page) => (
                    <Link
                        Type='button'
                        type='button'
                        variant='text'
                        href={page.url}
                        key={page.name}
                        sx={{
                            color: 'white',
                            fontSize: '1.4rem',
                        }}
                    >
                        {page.name}
                    </Link>
                ))}
            </Box>
        )
    } else if (session.isVerified === true) {
        return (
            <Button
                type={'button'}
                variant={'text'}
                key={'LOGOUT'}
                onClick={handleLogout}
                sx={{
                    color: 'white',
                    fontSize: '1.4rem',
                }}
            >
                {'LOGOUT'}
            </Button>
        )
    }
}

function ResponsiveAppBar() {
    const pages = [
        {url: '/', name: 'HOME'},
        {url: '/about', name: 'ABOUT'},
        {url: '/services', name: 'SERVICES'},
        {url: '/hospitals', name: 'HOSPITALS'},
        {url: '/search', name: 'SEARCH'},
    ];
    return (
        <AppBar
            position='static'
            sx={{background: '#020220', width: '100%'}}
        >
            <Toolbar disableGutters>
                <MEDIPAL/>
                <Box
                    sx={{
                        flexGrow: 1,
                        ml: 'auto',
                        mr: 'auto',
                    }}
                >
                    {pages.map((page) => (
                        <Link
                            Type='button'
                            type='button'
                            variant='text'
                            href={page.url}
                            key={page.name}
                            sx={{
                                color: 'white',
                                fontSize: '1.4rem',
                            }}
                        >
                            {page.name}
                        </Link>
                    ))}
                </Box>
                <Box
                    sx={{
                        ml: 'auto',
                    }}>
                    <Status/>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default ResponsiveAppBar;
