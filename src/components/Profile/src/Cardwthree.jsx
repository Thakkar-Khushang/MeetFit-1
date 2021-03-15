import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Cardwthree from "@material-ui/core/Card";
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
    <Cardwthree className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Sonam Ahuja
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Basavanagudi
        </Typography>
        <Typography variant="body2" component="p">
          Swimming
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Message</Button>
      </CardActions>
    </Cardwthree>
  );
}
