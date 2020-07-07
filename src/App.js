import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  }
}));

const getResults = () => {
  console.log('some result');
}

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello Warwick Analytics
        </p>
        <form className={classes.root}>
          <TextField id="search-word" label="Search word" variant="outlined" helperText="Enter the word you want to find." />
          <TextField id="search-text" label="Search text" variant="outlined" helperText="Enter the text to find the word in." />
          <br />
          <Button variant="outlined" onClick={getResults}>Search</Button>
        </form>
      </header>
    </div>
  );
}

export default App;
