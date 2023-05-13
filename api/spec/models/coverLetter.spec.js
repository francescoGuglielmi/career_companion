const mongoose = require("mongoose");
require("../mongodb_helper");
const CoverLetter = require("../../models/coverLetter");
const User = require("../../models/user");
let user
let coverLetter

describe("CoverLetter model", () => {

  beforeAll(async () => {
    await mongoose.connection.createCollection("coverletters");

    user = await new User({
      firstName: "firstName",
      lastName: "lastName",
      email: "email@example.com",
      password: "password123"
    }).save();

    coverLetter = new CoverLetter({
      company: "Some company",
      jobPosition: "Some job position",
      content: "Cover letter content",
      user: user._id
    });
  });

  afterAll(async () => {
    await mongoose.connection.collections.coverletters.drop()
  })

  beforeEach(async () => {
    await mongoose.connection.collections.coverletters.deleteMany();
    await mongoose.connection.collections.users.deleteMany();
  });

  it("has a company", () => {
    expect(coverLetter.company).toEqual("Some company")
  })

  it("has a job position", () => {
    expect(coverLetter.jobPosition).toEqual("Some job position")
  })

  it("has a content", () => {
    expect(coverLetter.content).toEqual("Cover letter content")
  })

  it("has a user", () => {
    expect(coverLetter.user).toEqual(user._id)
  })

  it("can list all cover letters", async () => {
    await CoverLetter.find((err, coverletters) => {
      expect(err).toBeNull();
      expect(coverletters).toEqual([]);
    })
  })

})