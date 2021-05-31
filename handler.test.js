const supertest = require('supertest');
const app = require('./handler');
const request = supertest.agent(app);

describe('TEST SUITE FOR SCHEDULE ROUTE', () => {
	describe('This test is for schedule route: /weekly_schedule/', () => {
		it('should successfully access the home endpoint', done => {
			request.get('/weekly_schedule')
				.expect(200)
				.then(response => {
					expect(response.status).toEqual(200);
					expect(response.body).toHaveProperty(
						'message',
						'Welcome to the Restful Api using Express and Postgres'
					);
					done();
				});
			});
		});
});
