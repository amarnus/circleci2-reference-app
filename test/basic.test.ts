import app from '../server';
import * as request from 'supertest';

describe('basic server tests', () => {

    it('must start', () => {
        return request(app)
            .get('/')
            .expect(404);
    });

});
