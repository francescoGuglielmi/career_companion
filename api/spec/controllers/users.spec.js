const app = require("../../app");
const request = require("supertest");
require("../mongodb_helper");
const User = require('../../models/user')

describe("/users", () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  afterAll(async () => {
    await User.deleteMany({});
  })

  describe("POST, when email, password and full name are provided", () => {
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

  describe("PUT /users/:id", () => {

    describe("when firstName, lastName or email are provided", () => {

      it("response code is 201", async () => {
        await request(app)
          .post("/users")
          .send({email: "poppy@email.com", password: "password1234",  firstName: "some", lastName: "one"})
        let user = await User.findOne({ email: "poppy@email.com" })

        let response = await request(app)
          .put(`/users/${user._id}`)
          .send({firstName: "John", lastName: "Doe", email:"johndoe@example.com"})
        expect(response.statusCode).toBe(201)
        
        let users = await User.find()
        expect(users.length).toEqual(1)
        expect(users[0].firstName).toEqual("John")
        expect(users[0].lastName).toEqual("Doe")
        expect(users[0].email).toEqual("johndoe@example.com")
      })

      it("updates the existing user", async () => {
        await request(app)
          .post("/users")
          .send({email: "poppy@email.com", password: "password1234",  firstName: "some", lastName: "one"})
        let user = await User.findOne({ email: "poppy@email.com" })

        await request(app)
          .put(`/users/${user._id}`)
          .send({firstName: "John", lastName: "Doe", email:"johndoe@example.com"})
        
        let users = await User.find()
        expect(users.length).toEqual(1)
        expect(users[0].firstName).toEqual("John")
        expect(users[0].lastName).toEqual("Doe")
        expect(users[0].email).toEqual("johndoe@example.com")
      })
  
    })

    describe("when a user doesn't exist or parameters are invalid", () => {

      it("returns status code 404", async () => {
        await request(app)
          .put(`/users/64625bff7f52984d855b1e68`)
          .send({firstName: "John", lastName: "Doe", email:"johndoe@example.com"})
          .expect(404)
      })

      it("returns status code 500", async () => {
        await request(app)
          .put(`/users/1`)
          .send({firstName: "John", lastName: "Doe", email:"johndoe@example.com"})
          .expect(500)
      })

    })

  })

  
})