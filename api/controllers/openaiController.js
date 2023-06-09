const { Configuration, OpenAIApi } = require("openai");


const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.API_KEY
  })
);

const OpenaiController = {

  GenerateQuestions: (req, res) => {
    const jobSelection = req.body.jobSelection;
    let gptInputJob = `Act as a technical job interview coach for the ${jobSelection} role and provide the top 5 most frequently asked technical questions in this field, without any additional text. Please adhere to the following guidelines for providing effective questions:`;

    openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptInputJob }],
    })
    .then((response) => {
      let result = response.data.choices[0].message.content.split("?");
      res.status(201).json({ message: "OK", questions: result})
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    })
  },

  GenerateFeedback: (req, res) => {
    const questions = req.body.questions;
    const answers = req.body.answers;
    const jobSelection = req.body.jobSelection;

    let answersForGPT =
    `Act as an interviewer for a ${jobSelection} role and provide actionable feedback to the candidate based on the answers to the following questions. Your feedback is crucial in helping the candidate understand their strengths and areas for improvement. Please adhere to the following guidelines for providing effective feedback:

    Keep your responses focused on the feedback itself, without including any additional text.
    Encourage the candidate to provide detailed answers beyond simple yes/no responses.
    Tailor your feedback directly to the candidate, keeping in mind that it should be constructive and supportive.
    Start each feedback with "Feedback" followed by the question number and a colon.
    Provide specific and clear feedback that highlights the candidate's areas where they can improve.
    Ensure that your feedback is actionable, offering suggestions or recommendations for enhancing their performance.` +
    `\nQuestion 1: ${questions[0]} Answer: ${answers[0]}` +
    `\nQuestion 2: ${questions[1]} Answer: ${answers[1]}` +
    `\nQuestion 3: ${questions[2]} Answer: ${answers[2]}` +
    `\nQuestion 4: ${questions[3]} Answer: ${answers[3]}` +
    `\nQuestion 5: ${questions[4]} Answer: ${answers[4]}`;

    openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: answersForGPT }]
    })
    .then((response) => {
      let result = response.data.choices[0].message.content;
      res.status(201).json({ message: "OK", feedback: result})
    })
    .catch((error) => {
      console.error(error.response.data);
      res.status(500).json({ message: "Internal Server Error" });
    })
  },

  GenerateCoverLetter: (req, res) => {
    const jobPosition = req.body.jobPosition
    const companyName = req.body.companyName
    const reasons = req.body.reasons
    const resume = req.body.resume
    
      openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{
            role: "user",
            content: `Act as a professional career advisor and help me write a tailored cover letter for the ${jobPosition} position at ${companyName}. The cover letter should reflect my motivation to apply for the role and highlight my qualifications, skills, and experiences. It should demonstrate professionalism and personality to increase my chances of getting hired. Please generate a cover letter that feels authentic and not like it was generated by ChatGPT and it has to be within 750 characters long. Use all the information about the company you can acquire and try to match them with the points in my cv. Use also the following information:
            Motivation: ${reasons}, Resume: ${resume}`
          }]
      })
      .then((response) => {
        let result = response.data.choices[0].message.content;
        res.status(201).json({ message: "OK", coverLetter: result});
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
      })
  }
  
};

module.exports = OpenaiController;

