# Warwick Analytics Assignment

---

[Warwick Analytics](https://warwickanalytics.com/) Software Engineering Assessment.

This mini project which takes a word and a body of text on a simple React front end and posts it to the Node/Express API endpoint. The response includes a total count and positions of the word occurances in the text. 

## Getting Started

To run the application on a local development machine, clone or fork the project from GitHub: https://github.com/hayeskg/wa_tech_test and follow the instructions below.

### Prerequisites 

* [Node.js](https://nodejs.org/en/download/ ) needs to be installed on the local development machine.

### Run locally

To start the application after download navigate to the directory and run the following commands:
```
npm i -D
```
This will install developer dependencies as outlined in the package.json file.

Once the dependencies are installed, the following command line scripts will start the backend and frontend services:

To start the React App on port 3000
```
npm start
```
To start the Express server on port 9090
```
node backend/listen.js
```
Use any compatible client to access the API endpoints (browser with JSON viewer extension, Insomnia, Postman or similar).

To verify correct server functionality by running the test suite simply run:
```
npm test app
```
This will run the test suite making use of [Jest](https://jestjs.io/) and [supertest](https://www.npmjs.com/package/supertest). Automated HTTP requests provide feedback on individiual endpoints and methods - happy paths and edge cases.

## Available endpoints

```
{
  "GET /api": {
    "description": "See the available Offset Earth API endpoints"
  },
  "POST /api": {
    "description": "Takes a word and a body of text. The API responds with the number of occurances of the word in the next and all indeces.",
    "request": {
      "word": "wordtofind",
      "text": "find wordtofind in text"
    },
    "exampleResponse": {
      "result": {
        "wordCount": 1,
        "wordPositions": [
          1
        ]
      }
    }
  }
}
```

## With additional time...

- At around the 2.5 hour mark, I hit an Express middleware error - I couldn't seem to deconstruct body of the HTTP request message. I used ```app.use(express.json())``` - it will need further debugging.
- More detailed testing of the backend server.
- Render results on the front page.
- Better RegExp pattern matching in the algorithm.


## Solution by

Kristof Hayes

https://github.com/hayeskg/

https://www.kristofhayes.me/
