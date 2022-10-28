import React from 'react';
import styles1 from '../styles/Home.module.css';
import Image from 'mui-image';
import {Box, Typography} from "@mui/material";

const Home = () => {
    return (
        <Box className={styles1.page} display={'flex'} flexDirection={'column'}>
            <Image
                alt=''
                src='hp6 - Copy.jpg'
            />
            <Box align='center' maxWidth={'40ch'} sx={{mx:'auto', my:2}}>
                <Typography align={'center'} textAlign={'center'} letterSpacing={'.2rem'} variant={'h3'} sx={{color: '#BFD2F8'}}>WELCOME TO MEDIPAL </Typography>
                <Typography align={'center'} textAlign={'center'} letterSpacing={'.1rem'}>
                    A GREAT PLACE TO RECEIVE CARE
                    MEDIPAL offers wide range of diagnosis services and
                    treaments. MEDIPAL helps connecting the
                    patients with the most skilled and professional doctors. We
                    keep you involved in available{' '}
                    treatment options and decisions about your treatment and
                    care.
                </Typography>
            </Box>

            <Image
                alt=''
                src='hp5 - Copy.jpg'
            />
            <Typography align={'center'} sx={{fontSize: 32}}>CARE YOU BELIEVE IN </Typography>
            <Image
                alt=''
                src='11.jpg'
            />
            <Box maxWidth='30ch' sx={{mx:'auto'}} align={'center'}>
                <h4>
                    Our Services
                </h4>
            <Typography textAlign={'center'} letterSpacing={'0.1rem'} my={2}>
                Search doctors with ease
                Get an appointment
                Search for wide range of hospitals and laboratories{' '}
                Search for different services available in different
                hospitals and laboratories{' '}
            </Typography>
            </Box>
            <Box display={'flex'} flexDirection={'column'}>
                <Image
                    alt=''
                    src='12.jpg'
                />

                <Typography textAlign={'center'} letterSpacing={'0.1rem'} maxWidth={'60ch'} sx={{mx:'auto'}} marginY={'2ch'} fontSize={'1.2rem'}>
                    MEDIPAL gives you 24/7 service. It gives you the perfect
                    opportunity to connect to the best
                    available doctors. Any patient can get appointments online.
                    Also they can view all the services
                    available across different hospitals and laboratories.
                    Medipal offers wide range of diagnosis
                    services and treaments.MEDIPAL helps connecting the patients
                    with the most skilled and
                    professional doctors. We keep you involved in available
                    treatment options and decisions
                    about your treatment and care.
                </Typography>
            </Box>
        </Box>
)
    ;
};

export default Home;
