const request = require('supertest');
const app = require('../app');
require("./mongodb_helper")
const User = require("../models/user")
const bcrypt = require("bcrypt")
let token
let user

describe('tokenChecker', () => {

  beforeAll(async () => {
    let hashedPassword = await bcrypt.hash("password2", 10)
    user = new User({ email: "test@test.com", password: hashedPassword, firstName: "some", lastName: "one" })
    await user.save()
    let tokenResponse = await request(app)
      .post("/tokens")
      .send({email: "test@test.com", password: "password2"})
    token = tokenResponse.body.token
  });

  afterAll(async () => {
    await User.deleteMany({})
  })

  it('should return 401 when token is missing', async () => {
    const response = await request(app)
      .get('/feedback')

    expect(response.statusCode).toBe(401)  
    expect(response.body.message).toBe('auth error');
  });

  it('should return 401 when token is invalid', async () => {
    const response = await request(app)
      .get('/feedback')
      .set('Authorization', 'Bearer invalid_token')
      
    expect(response.statusCode).toBe(401);
    expect(response.body.message).toBe('auth error');
  });

  it('should call the next middleware when token is valid', async () => {
    const response = await request(app)
      .get('/feedback')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });
});

