import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./fprop.css";
import "./prop.css";
const Fprop = () => {
    return(
        <div className="procon">
            <Card sx={{ width: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="https://upload.wikimedia.org/wikipedia/commons/c/cc/Lily_Pond_at_the_Lake_Palace%2C_Udaipur.jpg"
          alt="green iguana"
        /><div className="con">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontSize="20px">
            Taj Lake Palace <br/>
            Udaipur<br/>
            <div className="rat">4.8</div>  
          </Typography>
    
        </CardContent></div>
      </CardActionArea>
    </Card>
    <Card sx={{ width: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="https://www.hotelierindia.com/cloud/2022/10/21/Larisa-Manali.jpg"
          alt="green iguana"
        /><div className="con">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontSize="20px">
            LaRiSa Resort <br/>
            Manali<br/>
            <div className="rat">4.6</div>  
          </Typography>
    
        </CardContent></div>
      </CardActionArea>
    </Card>
    <Card sx={{ width: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          width="300"
          image="https://im.whatshot.in/img/2019/Dec/in2-cropped-1-1576476783.jpg"
          alt="green iguana"
        /><div className="con">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontSize="20px">
            Water Villa <br/>
            Lekshadweep<br/>
            <div className="rat">4.7</div>  
          </Typography>
    
        </CardContent></div>
      </CardActionArea>
    </Card>
    	

        </div>
    );
}
export default Fprop;