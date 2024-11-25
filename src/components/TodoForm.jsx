import PropTypes from "prop-types";

function TodoForm({ sendDataToParent, ListLength }) {
  const formHandler = (e) => {
    e.preventDefault();

    const inpuTask = document.querySelector("#formTaskInput").value;
    const formTag = document.querySelector("form");

    if (inpuTask.length !== 0 && inpuTask != null) {
      const NoteValues = {
        name: inpuTask,
        id: ListLength,
        top: 0,
        left: 0,
        ischeck: false,
      };
      sendDataToParent(NoteValues);
      formTag.reset();
    }
  };

  return (
    <>
      <div className="divForm">
        <h1>Todo Form</h1>
        <form onSubmit={formHandler}>
          <label>Tasks</label>
          <br></br>
          <input
            type="text"
            id="formTaskInput"
            name="formTaskInput"
            placeholder="What's your task?"
          ></input>
          <input type="submit" id="formBtn" name="formBtn" value="Add"></input>
        </form>
      </div>
    </>
  );
}
export default TodoForm;

TodoForm.propTypes = {
  sendDataToParent: PropTypes.func,
  ListLength: PropTypes.number,
};
