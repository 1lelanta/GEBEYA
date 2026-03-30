const request = require('supertest');
const app = require('../src/app');

describe('Backend API smoke and validation suite', () => {
  it('GET / should return health text', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Express App is running');
  });

  it('POST /signup should reject invalid payload', async () => {
    const response = await request(app).post('/signup').send({});

    expect(response.statusCode).toBe(400);
    expect(response.body.success).toBe(false);
    expect(Array.isArray(response.body.errors)).toBe(true);
  });

  it('POST /addproduct should reject invalid payload', async () => {
    const response = await request(app).post('/addproduct').send({});

    expect(response.statusCode).toBe(400);
    expect(response.body.success).toBe(false);
    expect(Array.isArray(response.body.errors)).toBe(true);
  });

  it('GET unknown route should return 404 json', async () => {
    const response = await request(app).get('/does-not-exist');

    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual({
      success: false,
      message: 'Route not found',
    });
  });
});
