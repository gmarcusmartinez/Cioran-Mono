import request from 'supertest';
import { app } from '../../app';
import { signup } from '../auth-helper';

describe('An unauthenticated user attempts to create a project', () => {
  it('responds with a 400 error', async () => {
    await request(app)
      .post('/api/projects/')
      .send({
        title: 'Test Project',
        slug: 'TSTPRJ',
      })
      .expect(400);
  });
});

describe('An authenticated user attempts to create a project', () => {
  it('responds with a 201', async () => {
    const cookie = await signup();

    const response = await request(app)
      .get('/api/auth/currentUser')
      .set('Cookie', cookie)
      .send();
  });
});
