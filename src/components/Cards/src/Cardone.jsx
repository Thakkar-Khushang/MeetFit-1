import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Cardone from "@material-ui/core/Card";
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
    
    <>
    <Cardone className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="images/gym.jpg"
          title="Gym"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Gold's Gym
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p>gymmnasium</p>
            <p>Timings: 6am - 5pm</p>
            Contact : +91 988454510
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href="https://goldsgym.in/">
            Learn More
          </a>
        </Button>
      </CardActions>
    </Cardone>
    



    
    </>




   



  );
}
