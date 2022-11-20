import {Box, Typography} from '@mui/material';
import Link from './Link';

function Copyright(props) {
    return (
        <Typography
            variant='body2'
            color='text.secondary'
            align='center'
            {...props}
        >
            {'Copyright © '}
            <Link
                href={'/'}
                type='link'
            >
                MEDIPAL
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const ResponsiveFooter = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                background: '#020220',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    mt: 4,
                }}
            >
                <Typography
                    variant='h3'
                    noWrap
                    component='a'
                    sx={{
                        ml: 'auto',
                        mr: '0',
                        fontSize: '1.5rem',
                        color: '#BFD2F8',
                        fontFamily: 'monospace',
                        letterSpacing: '0.3rem',
                    }}
                >
                    MEDI
                </Typography>
                <Typography
                    variant='h3'
                    noWrap
                    component='a'
                    sx={{
                        ml: '0',
                        mr: 'auto',
                        fontSize: '1.5rem',
                        color: 'blue',
                        fontFamily: 'monospace',
                        letterSpacing: '0.3rem',
                        opacity: 0.8,
                    }}
                >
                    PAL
                </Typography>
            </Box>
            <Typography
                variant='caption'
                align='center'
                sx={{color: 'white'}}
            >
                Leading the way in Medical Execellence, Trusted Care.
            </Typography>
            <Typography
                variant='caption'
                align='center'
                sx={{color: '#BFD2F8'}}
            >
                For feedback or concerns, please email us at support@medi.pal
            </Typography>
            <Copyright sx={{color: 'white', mb: 4}}/>
        </Box>
    );
};

export default ResponsiveFooter;
