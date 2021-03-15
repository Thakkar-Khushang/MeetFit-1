import React from "react";
import "./styles.css";
import Cardwone from "./Cardwone";
import Cardwtwo from "./Cardwtwo";
import Cardwthree from "./Cardwthree";
import Cardwfour from "./Cardwfour";
import Cardwfive from "./Cardwfive";
import Cardwsix from "./Cardwsix";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justify="center"
    >
      <Grid item xs={12} sm={6} md={4}>
        <Cardwone />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Cardwtwo />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Cardwthree />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Cardwfour />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Cardwfive />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Cardwsix />
      </Grid>
    </Grid>
  );
}
