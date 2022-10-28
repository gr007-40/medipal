import Image from 'mui-image';
import Box from '@mui/material/Box'
import styles from '../styles/Home.module.css';
import {Typography} from "@mui/material";

export default function About() {
    return (
        <Box className={styles.page} display={'flex'} flexDirection={'column'}>
            <Image
                alt=''
                src='shead.jpg'
            />
            <Box align={'center'}>
                <Typography variant={'h3'} sx={{color:'#BFD2F8'}} >WELCOME TO MEDIPAL </Typography>
                <p >BEST CARE FOR YOUR GOOD HEALTH </p>

                <p >
                    {' '}
                    * Our vision is to be the most sought after hospital website in Bangladesh
                </p>
                <p > * We want our users to get the best medical experience</p>
                <p > * We have the best hospiatls and doctors connected with us </p>
                <p >
                    {' '}
                    * Medipal is poised to identify and respond to the health-related needs of the diverse populations we serve
                </p>
            </Box>
        </Box>
    );
}
