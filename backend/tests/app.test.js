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
      test('GET request takes a word and text on the request query and responds with status 200 and a response object with wordCount and wordPositions', () => {
        return request(app)
          .get('/api')
          .then(({ body }) => {
            expect(body.treeCount).toBe(4627);
            body.trees.forEach((treeObj) => {
              expect(Object.keys(treeObj))
                .toEqual(expect.arrayContaining([
                  'id',
                  'value',
                  'createdAt',
                  'projectId',
                  'varient'
                ]))
            })
          })
      })
      test('GET request with varient query responds with status 200 and all tree objects of correct varient', () => {
        return request(app)
          .get('/api/trees?varient=normal')
          .then(({ body }) => {
            expect(body.treeCount).toBe(1472);
            body.trees.forEach((treeObj) => {
              expect(treeObj.varient).toBe('normal');
              expect(Object.keys(treeObj))
                .toEqual(expect.arrayContaining([
                  'id',
                  'value',
                  'createdAt',
                  'projectId',
                  'varient'
                ]));
            })
          })
      })
      test('GET request with projectId query responds with status 200 and all tree objects of correct projecId', () => {
        return request(app)
          .get('/api/trees?projectId=113')
          .then(({ body }) => {
            expect(body.treeCount).toBe(1397);
            body.trees.forEach((treeObj) => {
              expect(treeObj.projectId).toBe(113);
              expect(Object.keys(treeObj))
                .toEqual(expect.arrayContaining([
                  'id',
                  'value',
                  'createdAt',
                  'projectId',
                  'varient'
                ]));
            })
          })
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
    test('Route not found message and status 404 returned when incorrect path is accessed', () => {
      return request(app)
        .get('/api/trees/whatever')
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