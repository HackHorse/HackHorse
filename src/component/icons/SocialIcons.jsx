import React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function SocialIcons(){

    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab  aria-label="linkedin" sx={{ width: 50, height:50 }}>
        <a href="https://www.linkedin.com/in/parneet-singh-107470240/" target='_blank' rel="noopener noreferrer"><LinkedInIcon /></a>
        </Fab>
        <Fab aria-label="facebook" sx={{ width: 50, height:50 }}>
        <a href="https://www.facebook.com/preet.mallhi.9" target='_blank' rel="noopener noreferrer"><FacebookIcon /></a>
        </Fab>
        <Fab  aria-label="instagram" sx={{ width: 50, height:50 }}>
        <a href="https://instagram.com/parneetsinghmallhi?igshid=YmMyMTA2M2Y=" target='_blank' rel="noopener noreferrer"><InstagramIcon /></a>
        </Fab>
      </Box>
    );
}