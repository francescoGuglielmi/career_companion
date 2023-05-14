const app = require("../../app");
const request = require("supertest");
require("../mongodb_helper");
const User = require('../../models/user')

describe("/users", () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  describe("POST, when email and password are provided", () => {
    it("the response code is 201", async () => {
      let response = await request(app)
        .post("/users")
        .send({email: "poppy@email.com", password: "password1234",  firstName: "some", lastName: "one"})
      expect(response.statusCode).toBe(201)
    })

    it("a user is created", async () => {
      await request(app)
        .post("/users")
        .send({email: "scarlett@email.com", password: "password1234", firstName: "some", lastName: "one"})
      let users = await User.find()
      let newUser = users[users.length - 1]
      expect(newUser.email).toEqual("scarlett@email.com")
    })
  })

  describe("POST, when password is missing", () => {
    it("response code is 400", async () => {
      let response = await request(app)
        .post("/users")
        .send({email: "skye@email.com", firstName: "some", lastName: "one"})
      expect(response.statusCode).toBe(400)
    });

    it("does not create a user", async () => {
      await request(app)
        .post("/users")
        .send({email: "skye@email.com", firstName: "some", lastName: "one"})
        let users = await User.find()
        expect(users.length).toEqual(0)
    });
  })
  
  describe("POST, when email is missing", () => {
    it("response code is 400", async () => {
      let response = await request(app)
        .post("/users")
        .send({password: "1234"})
      expect(response.statusCode).toBe(400)
    });

    it("does not create a user", async () => {
      await request(app)
        .post("/users")
        .send({password: "1234"})
      let users = await User.find()
      expect(users.length).toEqual(0)
    });
  })
})