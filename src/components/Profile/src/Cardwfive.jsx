import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Cardwfive from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275
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

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Cardwfive className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Zoya Abbas
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Indranagar
        </Typography>
        <Typography variant="body2" component="p">
          Athletics
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Message</Button>
      </CardActions>
    </Cardwfive>
  );
}
