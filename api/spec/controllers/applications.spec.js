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
        .post("/applications")
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

    it("an application is created", async () => {
      await request(app)
        .post("/applications")
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
      let applications = await Application.find()

      expect(applications.length).toBe(1)
      expect(applications[0].company).toEqual("Company 2 LTD")
      expect(applications[0].jobTitle).toEqual("Senior Employee 2")
      expect(applications[0].location).toEqual("London")
      expect(applications[0].link).toEqual("https://github.com/francescoGuglielmi")
      expect(applications[0].jobDetails).toEqual("10 years of experience")
      expect(applications[0].applicationStatus).toEqual("Applied for role")
      expect(applications[0].user).toEqual(retrievedUser._id)
      expect(applications[0].createdAt).toEqual(new Date().toLocaleDateString())
    })
  })

  describe("GET /applications", () => {
    it("returns an empty array", async () => {
      let response = await request(app)
        .get("/applications")
        .set({ Authorization: `Bearer ${token}` })

      expect(response.statusCode).toBe(200)
      expect(response.body.applications).toEqual([])
    })

    xit("returns the cover letters in the database", async () => {
      const feedback = new Feedback({
        company: "Google",
        jobPosition: "Data Analyst",
        rating: "5",
        content: "This is the feedback's body",
        userId: retrievedUser._id
      })
      await feedback.save()

      let response = await request(app)
        .get("/feedback")
        .set({ Authorization: `Bearer ${token}` })

      expect(response.statusCode).toBe(200)
      expect(response.body.feedbacks.length).toBe(1)
      expect(response.body.feedbacks[0].company).toEqual("Google")
      expect(response.body.feedbacks[0].jobPosition).toEqual("Data Analyst")
      expect(response.body.feedbacks[0].rating).toEqual("5")
      expect(response.body.feedbacks[0].content).toEqual("This is the feedback's body")
      expect(response.body.user.email).toEqual("test@test.com")
    })
  })


})