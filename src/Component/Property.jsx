import React from "react";
import "./prop.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Property =() => {
    return(
        <div className="procon">
     <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image="https://media.timeout.com/images/105892648/750/422/image.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Hotels<br/>2500+
          </Typography>
    
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image="https://sunhatvillaswebstorage.blob.core.windows.net/photocache/3976/2880/1.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Villas<br/>1500+
          </Typography>
    
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image="https://etimg.etb2bimg.com/photo/97411875.cms"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            Cottage
            <br/>500+
          </Typography>
    
        </CardContent>
      </CardActionArea>
    </Card>
        </div>
    );
};

export default Property;