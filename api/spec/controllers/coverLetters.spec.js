const app = require("../../app");
const request = require("supertest");
require("../mongodb_helper");
const bcrypt = require("bcrypt")
const User = require('../../models/user');
const CoverLetter = require("../../models/coverLetter");
let user
let token

describe("CoverLettersController", () => {

  beforeAll(async () => {
    let hashedPassword = await bcrypt.hash("password2", 10)
    user = new User({ email: "test@test.com", password: hashedPassword, firstName: "some", lastName: "one" })
    await user.save()
    let tokenResponse = await request(app)
      .post("/tokens")
      .send({email: "test@test.com", password: "password2"})
    token = tokenResponse.body.token
  });

  beforeEach(async () => {
    await CoverLetter.deleteMany({})
  })

  afterAll( async () => {
    await User.deleteMany({})
  })

  describe("POST, when company, jobPosition, content and user are provided", () => {
    it("returns status code 201", async () => {
      let retrievedUser = await User.findOne({ email: "test@test.com" })
      let response = await request(app)
        .post("/coverLetterGen")
        .set({ Authorization: `Bearer ${token}` })
        .send({ 
          company: "Company LTD", 
          jobPosition: "Senior Employee", 
          content: "some content here", 
          user: retrievedUser._id 
        })
      expect(response.statusCode).toBe(201)
    })

    it("returns status code 201", async () => {
      let retrievedUser = await User.findOne({ email: "test@test.com" })
      let response = await request(app)
        .post("/coverLetterGen")
        .set({ Authorization: `Bearer ${token}` })
        .send({ 
          company: "Company LTD", 
          jobPosition: "Senior Employee", 
          content: "some content here", 
          user: retrievedUser._id 
        })
      expect(response.statusCode).toBe(201)
    })
  })
})