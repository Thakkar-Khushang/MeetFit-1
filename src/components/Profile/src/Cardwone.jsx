import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Cardwone from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 200
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const {dataset} = props;

  return (
    dataset.map((data,index) => {
      return(
    <Grid item xs={12} sm={6} md={4}>
    <Cardwone className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {data.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {data.city}
        </Typography>
        <Typography variant="body2" component="p">
          {data.activity}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Cardwone>
    </Grid>
  )
}
    ))}