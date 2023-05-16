const app = require("../../app");
const request = require("supertest");
require("../mongodb_helper");
const bcrypt = require("bcrypt")
const User = require('../../models/user');
let CoverLetter = require("../../models/coverLetter");
let retrievedUser
let token

describe("CoverLettersController", () => {

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
    await CoverLetter.deleteMany({})
  })

  afterAll( async () => {
    await User.deleteMany({})
    await CoverLetter.deleteMany({})
  })

  describe("POST, when company, jobPosition, content and user are provided", () => {
    it("returns status code 201", async () => {
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

    it("a cover letter is created", async () => {
      await request(app)
        .post("/coverLetterGen")
        .set({ Authorization: `Bearer ${token}` })
        .send({ 
          company: "Company LTD", 
          jobPosition: "Senior Employee", 
          content: "some content here", 
          user: retrievedUser._id 
        })
      let response = await CoverLetter.find()
      expect(response.length).toEqual(1)
      expect(response[0].company).toEqual("Company LTD")
      expect(response[0].jobPosition).toEqual("Senior Employee")
      expect(response[0].content).toEqual("some content here")
      expect(response[0].user).toEqual(retrievedUser._id)
    })
  })

  describe("GET /coverLetterGen", () => {

    it("returns an empty array", async () => {
      let response = await request(app)
        .get("/coverLetterGen")
        .set({ Authorization: `Bearer ${token}` })
      expect(response.statusCode).toBe(200)
      expect(response.body.coverLetters).toEqual([])
    })

    it("returns the cover letters in the database", async () => {
      const coverLetter = new CoverLetter({
        company: "Google",
        jobPosition: "Data Analyst",
        content: "This is the cover letter's body",
        user: retrievedUser._id
      })
      await coverLetter.save()
      
      let response = await request(app)
        .get("/coverLetterGen")
        .set({ Authorization: `Bearer ${token}` })
      expect(response.statusCode).toBe(200)
      expect(response.body.coverLetters[0].company).toEqual("Google")
      expect(response.body.coverLetters[0].jobPosition).toEqual("Data Analyst")
      expect(response.body.coverLetters[0].content).toEqual("This is the cover letter's body")
      expect(response.body.coverLetters[0].user.email).toEqual("test@test.com")
    })
  })

})

