var mongoose = require("mongoose");

beforeAll(function (done) {
  mongoose.connect("mongodb://0.0.0.0/career_companion_test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex : true
  });

  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.on("open", function () {
    done();
  });
});

afterAll( async () => {
  await mongoose.disconnect();
  await mongoose.connection.close();
});
