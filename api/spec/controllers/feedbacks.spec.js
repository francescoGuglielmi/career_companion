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

  describe("GET /feedback", () => {
    it("returns an empty array", async () => {
      let response = await request(app)
        .get("/feedback")
        .set({ Authorization: `Bearer ${token}` })

      expect(response.statusCode).toBe(200)
      expect(response.body.feedbacks).toEqual([])
    })

    it("returns the feedbacks in the database", async () => {
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

  describe("DELETE /feedback/:feedbackId", () => {

    describe("when a feedback doesn't exist", () => {
      it("returns a status code 404", async () => {
        let response = await request(app)
        .delete(`/feedback/${retrievedUser._id}`)
        .set({ Authorization: `Bearer ${token}` })

        expect(response.statusCode).toBe(404)
      })
    })

    describe("when a feedback exists", () => {
      it("deletes the feedback with a specific id", async () => {
        await request(app)
        .post("/feedback")
        .set({ Authorization: `Bearer ${token}` })
        .send({ 
          company: "Company LTD", 
          jobPosition: "Senior Employee", 
          rating: "5",
          content: "some content here", 
          user: retrievedUser._id 
        })
        let feedbacks = await Feedback.find()
        let response = await request(app)
          .delete(`/feedback/${feedbacks[0]._id}`)
          .set({ Authorization: `Bearer ${token}` })

        expect(response.statusCode).toBe(200)
        feedbacks = await Feedback.find()
        expect(feedbacks.length).toBe(0)
      })
    })

    describe("when a feedback exists but the deletion query has invalid id", () => {
      it("returns a status code 500", async () => {
        await request(app)
        .post("/feedback")
        .set({ Authorization: `Bearer ${token}` })
        .send({ 
          company: "Company LTD", 
          jobPosition: "Senior Employee", 
          rating: "5",
          content: "some content here", 
          user: retrievedUser._id 
        })
        let response = await request(app)
          .delete(`/feedback/1`)
          .set({ Authorization: `Bearer ${token}` })
        expect(response.statusCode).toBe(500)
      })
    })

  })

})