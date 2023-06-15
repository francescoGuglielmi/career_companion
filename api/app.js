const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const JWT = require("jsonwebtoken");
require("dotenv").config()

const feedbackRouter = require("./routes/feedbacks")
const coverLetterRouter = require("./routes/coverLetters")
const applicationsRouter = require("./routes/applications");
const tokensRouter = require("./routes/tokens");
const usersRouter = require("./routes/users");
const openaiRouter = require("./routes/openaiRouter")

const app = express();
const cors = require("cors");

// setup for receiving JSON

app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const allowedOrigins = ["localhost:3000", "https://career-companion-39n4.onrender.com"]
app.use(cors({
  origin: allowedOrigins
}));

// middleware function to check for valid tokens
const tokenChecker = (req, res, next) => {

  let token;
  const authHeader = req.get("Authorization")

  if(authHeader) {
    token = authHeader.slice(7)
  }

  JWT.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if(err) {
      console.log(err)
      res.status(401).json({message: "auth error"});
    } else {
      req.user_id = payload.user_id;
      next();
    }
  });
};

// route setup
app.use("/feedback", tokenChecker, feedbackRouter)
app.use("/coverLetterGen", tokenChecker, coverLetterRouter);
app.use("/applications", tokenChecker, applicationsRouter);
app.use("/openai", tokenChecker, openaiRouter)
app.use("/tokens", tokensRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {

  console.error(err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // respond with details of the error
  res.status(err.status || 500).json({ message: err.message || 'server error' });
});

module.exports = app;
