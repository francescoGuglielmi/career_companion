const app = require("../../app");
const request = require("supertest");
require("../mongodb_helper");
const bcrypt = require("bcrypt")
const User = require('../../models/user');
const Application = require("../../models/application");
let retrievedUser
let token

describe("ApplicationController", () => {

  beforeAll(async () => {
    let hashedPassword = await bcrypt.hash("password2", 10)
    let user = new User({ email: "test@test.com", password: hashedPassword, firstName: "some", lastName: "one" })
    await user.save()
    let tokenResponse = await request(app)
      .post("/tokens")
      .send({email: "test@test.com", password: "password2"})
    token = tokenResponse.body.token
    retrievedUser = await User.findOne({ email: "test@test.com" })
  });

  beforeEach(async () => {
    await Application.deleteMany({})
  })

  afterAll( async () => {
    await User.deleteMany({})
    await Application.deleteMany({})
  })

  describe("POST, when company, jobTitle, location, link, jobDetails, applicationStatus, user and createdAt are provided", () => {
    it("returns status code 201", async () => {
      let response = await request(app)
        .post("/feedback")
        .set({ Authorization: `Bearer ${token}` })
        .send({ 
          company: "Company 2 LTD",
          jobTitle: "Senior Employee 2",
          location: "London",
          link: "https://github.com/francescoGuglielmi",
          jobDetails: "10 years of experience",
          applicationStatus: "Applied for role",
          user: retrievedUser._id,
          createdAt: new Date().toLocaleDateString()
        })

      expect(response.statusCode).toBe(201)
    })

    xit("a feedback is created", async () => {
      await request(app)
        .post("/feedback")
        .set({ Authorization: `Bearer ${token}` })
        .send({ 
          company: "Company LTD", 
          jobTitle: "Senior Employee", 
          rating: "5",
          content: "some content here", 
          userId: retrievedUser._id 
        })
      let response = await Feedback.find()

      expect(response.length).toBe(1)
      expect(response[0].company).toEqual("Company LTD")
      expect(response[0].jobPosition).toEqual("Senior Employee")
      expect(response[0].rating).toEqual("5")
      expect(response[0].content).toEqual("some content here")
      expect(response[0].user._id).toEqual(retrievedUser._id)
    })
  })

})