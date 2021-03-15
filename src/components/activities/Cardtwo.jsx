import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Cardtwo from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    
    
    <Cardtwo className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="images/track.jpg"
          title="Athletics"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Indian Athletic Academy
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p>Athletics</p>
            <p>Timings: 5am - 7pm</p>
            Contact : +91 878454510
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href="http://indianathleticacademy.com/">
            Learn More
          </a>
        </Button>
      </CardActions>
    </Cardtwo>
    



    




   



  );
}
