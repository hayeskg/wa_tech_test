const request = require('supertest');
const app = require('../app');

describe('app', () => {
  describe('/', () => {
    test('GET request responds with Status 200 and available endpoints', () => {
      return request(app)
        .get('/api')
        .expect(200)
        .then(({ body }) => {
          expect(typeof body).toBe('object');
        })
    })
    describe('/api', () => {
      test('POST request takes a word and text on the request query and responds with status 200 and a response object with wordCount and wordPositions', () => {
        const request = { word: "dog", text: "Dog barks at moon." }
        return request(app)
          .post('/api')
          .send(request)
          .then(({ body }) => {
            expect(body.result).toBe({
              results: {
                "wordCount": 1,
                "wordPositions": [0]
              }
            });
          })
      })
    })
    describe('error handling', () => {
      test('Route not found message and status 404 returned when incorrect path is accessed', () => {
        return request(app)
          .get('/api/whatever')
          .expect(404)
          .then(({ body }) => {
            expect(body.msg).toBe('Route not found');
          })
      })
      test('Method not allowed message and status 405 returned when incorrect method other than GET is used', () => {
        return request(app)
          .delete('/api/trees')
          .expect(405)
          .then(({ body }) => {
            expect(body.msg).toBe('Method not allowed');
          })
      })
      test('Method not allowed message and status 405 returned when incorrect method other than GET is used', () => {
        return request(app)
          .patch('/api')
          .expect(405)
          .then(({ body }) => {
            expect(body.msg).toBe('Method not allowed');
          })
      })
    })
  })
})