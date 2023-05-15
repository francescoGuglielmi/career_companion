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

  describe("POST /applications", () => {
    
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

    it("returns the applications from the database", async () => {
      await new Application({
        company: "Company 2 LTD",
        jobTitle: "Senior Employee 2",
        location: "London",
        link: "https://github.com/francescoGuglielmi",
        jobDetails: "10 years of experience",
        applicationStatus: "Applied for role",
        user: retrievedUser._id,
        createdAt: new Date().toLocaleDateString()
      }).save()

      let response = await request(app)
        .get("/applications")
        .set({ Authorization: `Bearer ${token}` })

      expect(response.body.applications.length).toBe(1)
      expect(response.body.applications[0].company).toEqual("Company 2 LTD")
      expect(response.body.applications[0].jobTitle).toEqual("Senior Employee 2")
      expect(response.body.applications[0].location).toEqual("London")
      expect(response.body.applications[0].link).toEqual("https://github.com/francescoGuglielmi")
      expect(response.body.applications[0].jobDetails).toEqual("10 years of experience")
      expect(response.body.applications[0].applicationStatus).toEqual("Applied for role")
      expect(response.body.applications[0].user.email).toEqual("test@test.com")
      expect(response.body.applications[0].createdAt).toEqual(new Date().toLocaleDateString())
    })
  })

  describe("PUT /applications/:id", () => {

    describe("when an application exists", () => {

      it("response code is 201", async () => {
        await new Application ({
          company: "Company 2 LTD",
          jobTitle: "Senior Employee 2",
          location: "London",
          link: "https://github.com/francescoGuglielmi",
          jobDetails: "10 years of experience",
          applicationStatus: "Applied for role",
          user: retrievedUser._id,
          createdAt: new Date().toLocaleDateString()
        }).save()

        let retrievedApplication = await Application.findOne({ company: "Company 2 LTD" })
  
        let response = await request(app)
          .put(`/applications/${retrievedApplication._id}`)
          .set({ Authorization: `Bearer ${token}` })
          .send({
            applicationStatus: "Not yet applied",
            interviewDate: ""
          })
        
        expect(response.statusCode).toBe(201)
      })

      it("updates the application status", async () => {
        await new Application ({
          company: "Company 2 LTD",
          jobTitle: "Senior Employee 2",
          location: "London",
          link: "https://github.com/francescoGuglielmi",
          jobDetails: "10 years of experience",
          applicationStatus: "Applied for role",
          user: retrievedUser._id,
          createdAt: new Date().toLocaleDateString()
        }).save()

        let retrievedApplication = await Application.findOne({ company: "Company 2 LTD" })

        expect(retrievedApplication.applicationStatus).toEqual("Applied for role")
        expect(retrievedApplication.interviewDate).toBeUndefined()

        let interviewDate = new Date()
        interviewDate.setDate(interviewDate.getDate() + 10)

        await request(app)
          .put(`/applications/${retrievedApplication._id}`)
          .set({ Authorization: `Bearer ${token}` })
          .send({
            applicationStatus: "Invited to interview",
            interviewDate: interviewDate.toLocaleDateString()
          })
        
        retrievedApplication = await Application.findOne({ company: "Company 2 LTD" })
        
        expect(retrievedApplication.applicationStatus).toEqual("Invited to interview")
        expect(retrievedApplication.interviewDate).toEqual(interviewDate.toLocaleDateString())
      })
    })

    describe("when the application doesn't exist", () => {

      it("returns a status code 404", async () => {
        let interviewDate = new Date()
        interviewDate.setDate(interviewDate.getDate() + 10)

        let response = await request(app)
          .put(`/applications/64625bff7f52984d855b1e68`)
          .set({ Authorization: `Bearer ${token}` })
          .send({
            applicationStatus: "Invited to interview",
            interviewDate: interviewDate.toLocaleDateString()
          })
        
          expect(response.statusCode).toBe(404)
          expect(response.body.error).toEqual("Application not found")
      })

      it("returns a status code 500 when id invalid", async () => {
        let interviewDate = new Date()
        interviewDate.setDate(interviewDate.getDate() + 10)

        let response = await request(app)
          .put(`/applications/1`)
          .set({ Authorization: `Bearer ${token}` })
          .send({
            applicationStatus: "Invited to interview",
            interviewDate: interviewDate.toLocaleDateString()
          })
        
          expect(response.statusCode).toBe(500)
          expect(response.body.message).toEqual("Internal Server Error")
      })

    })

    describe("DELETE /application/:id", () => {

      describe("when a application doesn't exist", () => {
        it("returns a status code 404", async () => {
          let response = await request(app)
          .delete(`/applications/${retrievedUser._id}`)
          .set({ Authorization: `Bearer ${token}` })
  
          expect(response.statusCode).toBe(404)
        })
      })
  
      describe("when an application exists", () => {
        it("returns status code 200", async () => {
          await new Application ({
            company: "Company 2 LTD",
            jobTitle: "Senior Employee 2",
            location: "London",
            link: "https://github.com/francescoGuglielmi",
            jobDetails: "10 years of experience",
            applicationStatus: "Applied for role",
            user: retrievedUser._id,
            createdAt: new Date().toLocaleDateString()
          }).save()

          let retrievedApplication = await Application.findOne({ company: "Company 2 LTD"})
          let response = await request(app)
            .delete(`/applications/${retrievedApplication._id}`)
            .set({ Authorization: `Bearer ${token}` })
  
          expect(response.statusCode).toBe(200)
        })

        it("deletes the application with a specific id", async () => {
          await new Application ({
            company: "Company 2 LTD",
            jobTitle: "Senior Employee 2",
            location: "London",
            link: "https://github.com/francescoGuglielmi",
            jobDetails: "10 years of experience",
            applicationStatus: "Applied for role",
            user: retrievedUser._id,
            createdAt: new Date().toLocaleDateString()
          }).save()

          let retrievedApplication = await Application.findOne({ company: "Company 2 LTD"})
          await request(app)
            .delete(`/applications/${retrievedApplication._id}`)
            .set({ Authorization: `Bearer ${token}` })
          applications = await Application.find()

          expect(applications.length).toBe(0)
        })
      })
  
      describe("when a application exists but the deletion query has invalid id", () => {
        it("returns a status code 500", async () => {
          await new Application ({
            company: "Company 2 LTD",
            jobTitle: "Senior Employee 2",
            location: "London",
            link: "https://github.com/francescoGuglielmi",
            jobDetails: "10 years of experience",
            applicationStatus: "Applied for role",
            user: retrievedUser._id,
            createdAt: new Date().toLocaleDateString()
          }).save()

          let response = await request(app)
            .delete(`/applications/1`)
            .set({ Authorization: `Bearer ${token}` })

          expect(response.statusCode).toBe(500)
        })
      })
  
    })
  })

})