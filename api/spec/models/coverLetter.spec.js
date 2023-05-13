const mongoose = require("mongoose");
require("../mongodb_helper");
const CoverLetter = require("../../models/coverLetter");
const User = require("../../models/user");
let user
let coverLetter

describe("CoverLetter model", () => {

  beforeAll(() => {
    user = new User({
      firstName: "firstName",
      lastName: "lastName",
      email: "email@example.com",
      password: "password123"
    }).save()
  })

  beforeEach((done) => {
    mongoose.connection.collections.coverletters.drop(() => {
      done();
    });
    coverLetter = new CoverLetter({
      company: "Some company",
      jobPosition: "Some job position",
      content: "Cover letter content",
      user: user._id
    });
  });

  afterAll((done) => {
    mongoose.connection.collections.users.drop(() => {
      done();
    })
  })

  it("has a company", () => {
    expect(coverLetter.company).toEqual("Some company")
  })

  it("has a job position", () => {
    expect(coverLetter.jobPosition).toEqual("Some job position")
  })

})