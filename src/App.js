import "./App.css";
import { HomePage } from "./containers/HomePage/";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CustomerAccessPage } from "./containers/customerAccessPage";
import React,  { useEffect, useState } from "react";
import axios from 'axios' ;
import "./App.css";
import { Navbar } from "./components/navbar";
import { Marginer } from "./components/marginer";
import Card from "./components/Cards/src/Card";
import Cardwone from "./components/Profile/src/Cardwone";
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
  const [centers, getCenters] = useState (' ');
  const [users, getUsers] = useState (' ');
  const [loading, setLoading] = useState(true);


  const url1 = 'http://localhost:8080/api/centers';
  const url2 = 'http://localhost:8080/api/users'

  useEffect (() => {
    
    getAllUsers();
    
  }, []);

  useEffect (() => {
    
    getAllCenters();
    
  }, []);


  const getAllCenters = () =>{
    axios.get(`${url1}`)
    .then((response) => {
      const allCenters = response.data;
      getCenters(allCenters);
      setLoading(false);
    })
    .catch(error => console.error(`Error:${error}`));
    }

    const getAllUsers = () =>{
      axios.get(`${url2}`)
      .then((response) => {
        const allUsers = response.data;
        getUsers(allUsers);
        setLoading(false);
      })
      .catch(error => console.error(`Error:${error}`));
      }

  
  if(loading){
    return("Data is Loading")
  }
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
              
                <Cardwone dataset={users}/>
              
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
              justify="center">
            
                <Card dataset={centers}/>
              
            </Grid>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}



export default App;
