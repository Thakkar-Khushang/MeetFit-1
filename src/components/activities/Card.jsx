import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
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
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="./images/pool.jpg"
          title="Community Pool Centre"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ray Center
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p>Swimming</p>
            <p>Timings: 10am - 5pm</p>
            Contact : +91 9888754210
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href="http://www.raycenter.in/index.html">
            Learn More
          </a>
        </Button>
      </CardActions>
    </Card>
    



    
    </>




   



  );
}
