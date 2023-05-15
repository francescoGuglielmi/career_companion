const app = require("../../app");
const request = require("supertest");
require("../mongodb_helper");
const bcrypt = require("bcrypt")
const User = require('../../models/user');
const Feedback = require("../../models/feedback");
let retrievedUser
let token

describe("FeedbackController", () => {

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
    await Feedback.deleteMany({})
  })

  afterAll( async () => {
    await User.deleteMany({})
    await Feedback.deleteMany({})
  })

  describe("POST, when company, jobPosition, rating, content and user are provided", () => {

    it("returns status code 201", async () => {
      let response = await request(app)
        .post("/feedback")
        .set({ Authorization: `Bearer ${token}` })
        .send({ 
          company: "Company LTD", 
          jobPosition: "Senior Employee", 
          rating: "5",
          content: "some content here", 
          user: retrievedUser._id 
        })
      expect(response.statusCode).toBe(201)
    })

    it("a feedback is created", async () => {
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