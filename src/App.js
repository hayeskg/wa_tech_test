import React, { useState } from 'react';
import './App.css';
import { TextField, Button, FormControl } from '@material-ui/core';
import Results from './Results';

const axios = require('axios').default;

function App() {

  //define hooks
  const [formInfo, setFormInfo] = useState({
    word: '',
    text: ''
  })
  const { word, text } = formInfo;

  const [results, setResults] = useState({})

  console.log(formInfo)
  const getResults = () => {
    axios.post('http://127.0.0.1:9090/api', {
      formInfo
    })
      .then(({ data }) => {
        setResults(data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleWordInputChange = e => {
    setFormInfo({
      ...formInfo,
      word: e.target.value
    })
  }

  const handleTextInputChange = e => {
    setFormInfo({
      ...formInfo,
      text: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getResults();
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello Warwick Analytics
        </p>
        <FormControl value={formInfo}>
          <TextField
            id="search-word"
            name={word}
            label="Search word"
            variant="outlined"
            helperText="Enter the word you want to find."
            onChange={e => handleWordInputChange(e)}
          />
          <TextField
            id="search-text"
            name={text}
            label="Search text"
            variant="outlined"
            helperText="Enter the text to find the word in."
            onChange={e => handleTextInputChange(e)}
          />
          <br />
          <Button
            variant="outlined"
            onClick={handleSubmit}>Search</Button>
        </FormControl>
        <Results results={results} />
      </header>
    </div>
  );
}

export default App;
