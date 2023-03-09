import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



export default function ServiceCard(props){

    return (
<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt={props.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h3 className='cardHeading'>{props.title}</h3>
          </Typography>
          <Typography variant="body2" color="text.secondary">
           <p className='cardtext'>{props.text}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    );


}