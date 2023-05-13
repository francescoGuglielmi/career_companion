const mongoose = require('mongoose');
const Application = require('../../models/application');
const User = require('../../models/user');
require("../mongodb_helper");
let user
let application
const date = new Date();

describe("Application model", () => {
  beforeAll(async () => {
    await mongoose.connection.createCollection("applications")

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
      createdAt: date.toLocaleDateString(),
      interviewDate: date.setDate(date.getDate() + 10)
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
})