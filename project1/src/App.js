import React from 'react';
import NavBar from './components/navbar.js';
import CircularProgress1 from './components/progress.js';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, TextField, Button} from '@material-ui/core';
// import BarChart from './charts/barchart.js';
// import PieChart from './charts/piechart.js';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: 'lightblue',
    flexWrap: 'wrap',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(10),
    },
  },
  paper: {
    height: 300,
    width: 300,
    margin: '0 auto',
    marginTop: '5px',
    marginBottom: '150px',
    textAlign: 'center',
  },
  Input: {
   width: '95%',
   marginBottom: 0,
  },
}))

function App() {
  const classes = useStyles();
  return (
    // <div>
    <div className={classes.root}>
      <NavBar />
      <Paper elevation={3} className={classes.paper}>
      <h1>Login</h1>
      <form className={classes.root} noValidate autoComplete="off">
          <TextField className={classes.Input} label="Email" placeholder="Enter Email" type="text"/>
          <TextField className={classes.Input} label="Password" placeholder="Enter Password" type="password"/>
            <Button className={classes.Input} variant="contained" color="primary">
              Login
            </Button>
      </form><br/>
      <CircularProgress1/>
      </Paper>
  {/* <BarChart />
  <PieChart /> */}
    </div>
  );
}

export default App;
