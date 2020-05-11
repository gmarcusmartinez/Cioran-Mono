import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successful signup', async () => {
  return request(app)
    .post('/api/auth/signup')
    .send({
      name: 'Test User',
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);
});
it('returns a 400 w/ invalid email', async () => {
  return request(app)
    .post('/api/auth/signup')
    .send({
      name: 'Test User',
      email: 'test@test',
      password: 'password',
    })
    .expect(400);
});
it('returns a 400 w/ invalid password', async () => {
  return request(app)
    .post('/api/auth/signup')
    .send({
      name: 'test user',
      email: 'test@test',
      password: '1',
    })
    .expect(400);
});
it('returns a 400 w/ missing email and  password', async () => {
  return request(app)
    .post('/api/auth/signup')
    .send({
      name: '',
      email: '',
      password: '',
    })
    .expect(400);
});

it('does not allow duplicate emails', async () => {
  await request(app)
    .post('/api/auth/signup')
    .send({
      name: 'Test User',
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);
  await request(app)
    .post('/api/auth/signup')
    .send({
      name: 'Test User',
      email: 'test@test.com',
      password: 'password',
    })
    .expect(400);
});

it('set a cookie after successful signup', async () => {
  const response = await request(app)
    .post('/api/auth/signup')
    .send({
      name: 'Test User',
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);
  expect(response.get('Set-Cookie')).toBeDefined();
});
