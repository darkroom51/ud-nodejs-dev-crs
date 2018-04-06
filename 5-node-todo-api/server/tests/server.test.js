const expect = require('expect');
const request = require('supertest');

const { app } = require('./../server');
const { Todo } = require('./../models/todo');

beforeEach((done) => { // code before every single test case
	Todo.remove({})
		.then(() => done());
});

describe('POST /todo', () => {
	it('should create a new todo', (done) => {
		var text = 'Test todo text';

		request(app)
			.post('/todos')
			.send({ text })
			.expect(200)
			.expect((res) => {
				expect(res.body.text).toBe(text);
			})
			.end((err, res) => {
				if (err) {
					return done(err);
				}
				Todo.find()
					.then((todos) => {
						expect(todos.length).toBe(1); // test should create 1 todo
						expect(todos[0].text).toBe(text);
						done();
					})
					.catch((e) => done(e));
			});
	});

	it('should not create todo with invalid body data', (done) => {
		request(app)
			.post('/todos')
			.send({})
			.expect(400)
			.end((err, res) => {
				if(err) {
					return done(err);
				}
				Todo.find()
					.then((todos) => {
						expect(todos.length).toBe(0); // test should not create any todos
						done();
					})
					.catch((e) => done(e));
			});
	});

}); // end of describe()