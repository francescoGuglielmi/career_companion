import "./QuestionsForm.css";

function QuestionsForm(props) {
  return (
    <>
      <form onSubmit={props.handleAnswersSubmit}>
        <h3>Question {props.questions[0]}?</h3>
        <textarea
          value={props.answer1}
          onChange={props.handleAnswer1Change}
          className="w-full md:w-4/5  h-20 border-2 border-gray-100 shadow mb-4 mt-2 rounded-lg p-2"
        ></textarea>

        <h3>Question {props.questions[1]}?</h3>
        <textarea
          value={props.answer2}
          onChange={props.handleAnswer2Change}
          className="w-full md:w-4/5  h-20 border-2 border-gray-100 shadow mb-4 mt-2 rounded-lg p-2"
        ></textarea>

        <h3>Question {props.questions[2]}?</h3>
        <textarea
          value={props.answer3}
          onChange={props.handleAnswer3Change}
          className="w-full md:w-4/5  h-20 border-2 border-gray-100 shadow mb-4 mt-2 rounded-lg p-2"
        ></textarea>

        <h3>Question {props.questions[3]}?</h3>
        <textarea
          value={props.answer4}
          onChange={props.handleAnswer4Change}
          className="w-full md:w-4/5  h-20 border-2 border-gray-100 shadow mb-4 mt-2 rounded-lg p-2"
        ></textarea>

        <h3>Question {props.questions[4]}?</h3>
        <textarea
          value={props.answer5}
          onChange={props.handleAnswer5Change}
          className="w-full md:w-4/5  h-20 border-2 border-gray-100 shadow mb-4 mt-2 rounded-lg p-2"
        ></textarea>
        <div>
          <button
            type="submit"
            className="bg-blue text-white text-md py-2 px-4 mt-2 inline-flex items-center justify-center text-center border-2 hover:border-blue hover:bg-lblue rounded-xl ease-in-out duration-200 "
          >
            Submit Answers
          </button>
        </div>
      </form>
    </>
  );
}

export default QuestionsForm;
