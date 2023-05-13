const mongoose = require('mongoose');
require("../mongodb_helper");
const Feedback = require('../../models/feedback');
const User = require('../../models/user');
let user
let feedback

describe("Feedback model", () => {
  beforeAll(async () => {
    await mongoose.connection.createCollection("feedbacks");

    user = await new User({
      firstName: "firstName",
      lastName: "lastName",
      email: "email@example.com",
      password: "password123"
    }).save();

    feedback = ({
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

})