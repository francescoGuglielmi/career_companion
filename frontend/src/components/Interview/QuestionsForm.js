import './QuestionsForm.css'

function QuestionsForm(props) {

  return (
    <>
      <form onSubmit={props.handleAnswersSubmit}>
        <h3>Question {props.questions[0]}?</h3>
        <textarea value={props.answer1} onChange={props.handleAnswer1Change}></textarea>
        <br/>
        <h3>Question {props.questions[1]}?</h3>
        <textarea value={props.answer2} onChange={props.handleAnswer2Change}></textarea>
        <br/>
        <h3>Question {props.questions[2]}?</h3>
        <textarea value={props.answer3} onChange={props.handleAnswer3Change}></textarea>
        <br/>
        <h3>Question {props.questions[3]}?</h3>
        <textarea value={props.answer4} onChange={props.handleAnswer4Change}></textarea>
        <br/>
        <h3>Question {props.questions[4]}?</h3>
        <textarea value={props.answer5} onChange={props.handleAnswer5Change}></textarea>
        <br/>
        <button type="submit" className="submit_button">Submit Answers</button>
      </form>
    </>
  )
}

export default QuestionsForm;