const mongoose = require('mongoose');
require("../mongodb_helper");
const Feedback = require('../../models/feedback');
const User = require('../../models/user');
let user
let feedback

describe("Feedback model", () => {
  beforeAll(async () => {
    user = await new User({
      firstName: "firstName",
      lastName: "lastName",
      email: "email@example.com",
      password: "password123"
    }).save();

    feedback = new Feedback({
      company: "Company LTD",
      jobPosition: "Senior Employee",
      rating: "5",
      content: "it was a positive experience",
      user: user._id
    })
  });

  afterAll(async () => {
    await mongoose.connection.collections.feedbacks.drop()
  })

  beforeEach(async () => {
    await mongoose.connection.collections.feedbacks.deleteMany();
    await mongoose.connection.collections.users.deleteMany();
  });

  it("has a company", () => {
    expect(feedback.company).toEqual("Company LTD");
  })

  it("has a job position", () => {
    expect(feedback.jobPosition).toEqual("Senior Employee");
  })

  it("has a rating", () => {
    expect(feedback.rating).toEqual("5");
  })

  it("has a content", () => {
    expect(feedback.content).toEqual("it was a positive experience");
  })

  it("has a user", () => {
    expect(feedback.user).toEqual(user._id);
  })

  it("can list all feedbacks", async () => {
    await Feedback.find((err, feedbacks) => {
      expect(err).toBeNull();
      expect(feedbacks).toEqual([]);
    })
  })

  it("can save a feedback", async () => {
    const savedFeedback = await new Promise((resolve, reject) => {
      feedback.save((err, savedFeedback) => {
        if (err) {
          reject(err);
        } else {
          resolve(savedFeedback);
        }
      });
    });

    expect(savedFeedback).toBeDefined();

    const feedbacks = await Feedback.find();
    expect(feedbacks[0]).toMatchObject({
      company: "Company LTD",
      jobPosition: "Senior Employee",
      rating: "5",
      content: "it was a positive experience",
      user: user._id
    });

  })
})