import "./JobSelection.css";

function SelectJobPosition(props) {
  return (
    <form onSubmit={props.handleSelectionSubmit}>
      <h3 className="font-poppins-bold text-lg text-blue md:mb-4">
        What's the job position you want to train for?
      </h3>
      <div>
        <select
          value={props.jobSelection}
          onChange={props.handleSelectionChange}
          className="shadow border h-10 w-11/12 md:w-96 text-md mb-4 md:mb-8 rounded"
        >
          <option value="" className="shadow border">
            Generic Job Position (select below)
          </option>
          <option value="Junior Javascript Developer">
            Junior Javascript Developer
          </option>
          <option value="Junior Ruby Developer">Junior Ruby Developer</option>
          <option value="Junior Python Developer">
            Junior Python Developer
          </option>
          <option value="Junior Web Developer">Junior Web Developer</option>
          <option value="Junior Software Engineer">
            Junior Software Engineer
          </option>
          <option value="Junior Web Designer">Junior Web Designer</option>

          <option value="Intermediate Javascript Developer">
            Intermediate Javascript Developer
          </option>
          <option value="Intermediate Ruby Developer">
            Intermediate Ruby Developer
          </option>
          <option value="Intermediate Python Developer">
            Intermediate Python Developer
          </option>
          <option value="Intermediate Web Developer">
            Intermediate Web Developer
          </option>
          <option value="Intermediate Software Engineer">
            Intermediate Software Engineer
          </option>
          <option value="Intermediate Web Designer">
            Intermediate Web Designer
          </option>

          <option value="Senior Javascript Developer">
            Senior Javascript Developer
          </option>
          <option value="Senior Ruby Developer">Senior Ruby Developer</option>
          <option value="Senior Python Developer">
            Senior Python Developer
          </option>
          <option value="Senior Web Developer">Senior Web Developer</option>
          <option value="Senior Software Engineer">
            Senior Software Engineer
          </option>
          <option value="Senior Web Designer">Senior Web Designer</option>
        </select>
        <button
          className="bg-blue text-white text-md py-2 px-4 mb-4 ml-2 inline-flex items-center justify-center text-center border-2 hover:border-blue hover:bg-lblue rounded-xl ease-in-out duration-200 "
          type="submit"
        >
          Start Interview
        </button>
      </div>
    </form>
  );
}

export default SelectJobPosition;
