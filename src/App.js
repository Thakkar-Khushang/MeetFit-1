import "./App.css";
import { HomePage } from "./containers/HomePage/";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CustomerAccessPage } from "./containers/customerAccessPage";
import React from "react";
import "./styles.css";
import Card from "./Card";
import Cardone from "./Cardone";
import Cardtwo from "./Cardtwo"
import Cardthree from "./Cardthree"
import Cardfour from "./Cardfour"
import Cardfive from "./Cardfive"
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
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Cardone />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Cardtwo />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Cardthree />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Cardfour />
      </Grid>
       <Grid item xs={12} sm={6} md={4}>
        <Cardfive />
      </Grid>
      
    </Grid>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/customer/access/:action"
            exact
            component={CustomerAccessPage}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;