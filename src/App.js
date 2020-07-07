import React from 'react';
import './App.css';
import { TextField, Button } from '@material-ui/core';


const getResults = () => {
  console.log('some result');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello Warwick Analytics
        </p>
        <form>
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
