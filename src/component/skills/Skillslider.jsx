import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


export default function Skillslider(props){
    return (
   
        <Box sx={{ width: 600 }}>
        <h5>{props.skillname}</h5>
          <Slider  defaultValue={props.skillvalue} className='slider' valueLabelDisplay="auto" disabled />
        </Box>

    );
}