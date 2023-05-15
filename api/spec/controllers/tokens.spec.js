const app = require("../../app");
const request = require("supertest");
require("../mongodb_helper");
const User = require('../../models/user');
const bcrypt = require("bcrypt")

describe("/tokens", () => {
  beforeAll(async () => {
    let hashedPassword = await bcrypt.hash("password2", 10)
    const user = new User({ email: "test@test.com", password: hashedPassword, firstName: "some", lastName: "one" })
    await user.save()
  });

  afterAll( async () => {
    await User.deleteMany({})
  })

  it("a token is returned when creds are valid", async () => {
    let response = await request(app)
      .post("/tokens")
      .send({email: "test@test.com", password: "password2"})
    expect(response.status).toEqual(201)
    expect(response.body.token).not.toEqual(undefined)
    expect(response.body.message).toEqual("OK")
  })


  it("a token is not returned when creds are invalid", async () => {
    let response = await request(app)
      .post("/tokens")
      .send({email: "test@test.com", password: "123"})
    expect(response.status).toEqual(401)
    expect(response.body.token).toEqual(undefined)
    expect(response.body.message).toEqual("auth error")
  })

  it("returns status code 404 if the user doesn't exist", async () => {
    await User.deleteMany()
    let response = await request(app)
      .post("/tokens")
      .send({email: "test@test.com", password: "123"})
    expect(response.status).toEqual(404)
    expect(response.body.token).toEqual(undefined)
    expect(response.body.message).toEqual("auth error")
  })
})