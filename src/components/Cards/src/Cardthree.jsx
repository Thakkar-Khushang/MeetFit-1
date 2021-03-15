import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Cardthree from "@material-ui/core/Card";
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
    
    
    <Cardthree className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="images/yoga.jpg"
          title="yoga"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Akshar Yoga
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p>Meditation | Yoga</p>
            <p>Timings: 5am - 11pm</p>
            Contact : +91 9856144510
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href="https://aksharyoga.com/">
            Learn More
          </a>
        </Button>
      </CardActions>
    </Cardthree>
    



    




   



  );
}
