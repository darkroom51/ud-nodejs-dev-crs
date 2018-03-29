const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;


// with no describe() block
it('should return 404 response and Page not found.', (done) => {
    request(app)
        .get('/')
        .expect(404) // expect from supertest
        .expect((res) => {
            expect(res.body).toInclude({
                error: 'Page not found.'
            });
        })
        .end(done)
});

it('should return 200 res and check if Waldek exists', (done) => {
    request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
            expect(res.body).toInclude({
                name: 'Waldek',
                age: 37
            });
        })
        .end(done)
});


// describe('Server', () => {
    
//     describe('Get /', () => {
//         it('should return 404 response and Page not found.', (done) => {
//             request(app)
//                 .get('/')
//                 .expect(404) // expect from supertest
//                 .expect((res) => {
//                     expect(res.body).toInclude({
//                         error: 'Page not found.'
//                     });
//                 })
//                 .end(done)
//         });
//     });// end of 'Get /' .describe()

//     describe('Get /users', () => {
//         it('should return 200 res and check if Waldek exists', (done) => {
//             request(app)
//                 .get('/users')
//                 .expect(200)
//                 .expect((res) => {
//                     expect(res.body).toInclude({
//                         name: 'Waldek',
//                         age: 37
//                     });
//                 })
//                 .end(done)
//         }); 
//     });// end of 'Get /users' .describe()

// });// end of root .describe()