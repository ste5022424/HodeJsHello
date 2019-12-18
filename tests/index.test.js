const request = require('supertest');
const app = require('../src/express');

describe('Router Test', () => {
    it('/', async () => {
        const res = await request(app)
            .get('/');
        expect(res.statusCode).toEqual(200);
    });

    it('/error', async () => {
        const res = await request(app)
            .get('/error');
        expect(res.statusCode).toEqual(200);
    });
});