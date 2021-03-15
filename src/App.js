import "./App.css";
import { HomePage } from "./containers/HomePage/";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CustomerAccessPage } from "./containers/customerAccessPage";
import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Marginer } from "./components/marginer";
import Card from "./components/Cards/src/Card";
import Cardone from "./components/Cards/src/Cardone";
import Cardtwo from "./components/Cards/src/Cardtwo"
import Cardthree from "./components/Cards/src/Cardthree"
import Cardfour from "./components/Cards/src/Cardfour"
import Cardfive from "./components/Cards/src/Cardfive"
import Cardwone from "./components/Profile/src/Cardwone";
import Cardwtwo from "./components/Profile/src/Cardwtwo";
import Cardwthree from "./components/Profile/src/Cardwthree";
import Cardwfour from "./components/Profile/src/Cardwfour";
import Cardwfive from "./components/Profile/src/Cardwfive";
import Cardwsix from "./components/Profile/src/Cardwsix";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
});

function App(){
  const classes = useStyles();
  return (
    <div className="App">
      
      <Router>
        <Switch>

        <Route path="/profile">
          <Navbar />
          <Marginer direction="vertical" margin={7} />
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
          </Route>

          <Route path="/" exact component={HomePage} />
          <Route
            path="/customer/access/:action"
            exact
            component={CustomerAccessPage}
          />
          <Route path="/list">
            
            <Navbar />
            <Marginer direction="vertical" margin={7} />
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
          </Route>
        </Switch>
      </Router>
    </div>
  );
}



export default App;
