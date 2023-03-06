const request = require('supertest');
const app = require('../api');

describe('api server', () => {
    let api;

    beforeAll(() => {
        api = app.listen(5000, () => {
            console.log('Test server running on port 5000')
        })
    })

    afterAll((done) => {
        console.log('Gracefully stopping test server')
        api.close(done)
    })

    test('it responds to get /flashcards with status 200', (done) => {
        request(api)
            .get('/flashcards')
            .expect(200, done)
    });

    // test('it responds to get /events/:id with status 200', (done) => {
    //     request(api)
    //         .get('/events/1')
    //         .expect(200, done)
    // });

})
