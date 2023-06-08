const { Configuration, OpenAIApi } = require("openai");

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.API_KEY
  })
);

const OpenaiController = {

  GenerateFeedback: (req, res) => {
    const questions = req.body.questions;
    const answers = req.body.answers;
    const jobSelection = req.body.jobSelection;
    const result = ""

    try {
    let answersForGPT =
      `Knowing that the answers to these questions are for an interview for a ${jobSelection} position, could you give a feedback on how the answers to these questions could be improved to have more complete information?` +
      `Question 1: ${questions[0]} Answer: ${answers[0]}` +
      `Question 2: ${questions[1]} Answer: ${answers[1]}` +
      `Question 3: ${questions[2]} Answer: ${answers[2]}` +
      `Question 4: ${questions[3]} Answer: ${answers[3]}` +
      `Question 5: ${questions[4]} Answer: ${answers[4]}`;
    
    openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: answersForGPT }],
    })
    .then((res) => {
      result = res.data.choices[0].message.content;
    }); 

    res.status(201).json({ message: "OK", feedback: result})

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  GenerateQuestions: (req, res) => {
    const jobSelection = req.body.jobSelection;
    let gptInputJob = `Give me 5 of the most asked questions in a job interview for a ${jobSelection} position without any additional text`;
    const result = null

    try {
    openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptInputJob }],
    })
    .then((res) => {
      result = res.data.choices[0].message.content.split("?");
    });

    res.status(201).json({ message: "OK", questions: result})

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },


  
};

module.exports = OpenaiController;