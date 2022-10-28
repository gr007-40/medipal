import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Link from './Link';
import {postData} from '../utils';

// const Session = async () => {
//     const user = await postData('api/verify', {}).then((user) => {
//         return user;
//     });
//     if (await user.isVerified) {
//         console.log(user);
//         return (
//             <Box sx={{flexGrow: 0}}>
//                 <Link
//                     Type='iconButton'
//                     href='/profile'
//                 >
//                     <Avatar
//                         alt={user.name}
//                         src='hpf.png'
//                         // src={user.proPic}
//                     />
//                 </Link>
//             </Box>
//         );
//     } else {
//         const pages = [
//             {url: '/signup', name: 'SIGNUP'},
//             {url: '/login', name: 'LOGIN'},
//         ];
//         return (
//             <Box
//                 sx={{
//                     flexGrow: 0,
//                     ml: 'auto'
//                 }}
//             >
//                 {pages.map((page) => (
//                     <Link
//                         Type='button'
//                         type={'button'}
//                         href={page.url}
//                         key={page.name}
//                         variant='text'
//                         sx={{
//                             color: 'white',
//                             fontSize: '1.4rem',
//                         }}>
//                         {page.name}
//                     </Link>
//                 ))}
//             </Box>
//         );
//     }
// };

const MEDIPAL = () => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                display: {xs: 'none', md: 'flex'},
            }}
        >
            {/* <Icon>
                    <Avatar
                        alt='MEDIPAl'
                        src='/doo.svg'
                    />
                </Icon> */}
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

function ResponsiveAppBar() {
    const pages = [
        {url: '/', name: 'HOME'},
        {url: '/about', name: 'ABOUT'},
        {url: '/services', name: 'SERVICES'},
        {url: '/hospitals', name: 'HOSPITALS'},
        {url: '/signup', name: 'SIGNUP'},
        {url: '/login', name: 'LOGIN'},
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
                {/*<Session/>*/}
            </Toolbar>
        </AppBar>
    );
}

export default ResponsiveAppBar;
