const mongoose = require('mongoose');
const Application = require('../../models/application');
const User = require('../../models/user');
require("../mongodb_helper");
let user
let application
const date = new Date();

describe("Application model", () => {
  beforeAll(async () => {
    user = await new User({
      firstName: "firstName2",
      lastName: "lastName2",
      email: "email_2@example.com",
      password: "password2"
    }).save()

    application = new Application({
      company: "Company 2 LTD",
      jobTitle: "Senior Employee 2",
      location: "London",
      link: "https://github.com/francescoGuglielmi",
      jobDetails: "10 years of experience",
      applicationStatus: "Applied for role",
      user: user._id,
      createdAt: new Date().toLocaleDateString()
    })
  })

  afterAll(async () => {
    await mongoose.connection.collections.applications.drop()
  })

  beforeEach(async () => {
    await mongoose.connection.collections.applications.deleteMany()
    await mongoose.connection.collections.users.deleteMany()
  })

  it("has a company", () => {
    expect(application.company).toEqual("Company 2 LTD")
  })

  it("has a jobTitle", () => {
    expect(application.jobTitle).toEqual("Senior Employee 2")
  })

  it("has a location", () => {
    expect(application.location).toEqual("London")
  })

  it("has a link", () => {
    expect(application.link).toEqual("https://github.com/francescoGuglielmi")
  })

  it("has job details", () => {
    expect(application.jobDetails).toEqual("10 years of experience")
  })

  it("has an application status", () => {
    expect(application.applicationStatus).toEqual("Applied for role")
  })

  it("has a user", () => {
    expect(application.user).toEqual(user._id)
  })

  it("has a created at date", () => {
    expect(application.createdAt).toEqual(new Date().toLocaleDateString())
  })

  it("can list all applications", async () => {
    await Application.find((err, applications) => {
      expect(err).toBeNull();
      expect(applications).toEqual([]);
    })
  })

  it("can save an application", async () => {
    const savedApplication = await new Promise((resolve, reject) => {
      application.save((err, savedApplication) => {
        if (err) {
          reject(err);
        } else {
          resolve(savedApplication);
        }
      });
    });

    expect(savedApplication).toBeDefined();

    const applications = await Application.find();
    expect(applications[0]).toMatchObject({
      company: "Company 2 LTD",
      jobTitle: "Senior Employee 2",
      location: "London",
      link: "https://github.com/francescoGuglielmi",
      jobDetails: "10 years of experience",
      applicationStatus: "Applied for role",
      user: user._id,
      createdAt: new Date().toLocaleDateString()
    });
  });
})