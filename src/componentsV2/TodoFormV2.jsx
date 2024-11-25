import { useContext } from "react";
import { TaskContext } from "../Context/contextFile";

function TodoFormV2() {
  const { TaskListV2 } = useContext(TaskContext);
  const { AddnewTask } = useContext(TaskContext);
  const formHandler = (e) => {
    e.preventDefault();

    const inpuTask = document.querySelector("#formTaskInput").value;
    const formTag = document.querySelector("form");
    const NoteValuesV2 = {
      name: inpuTask,
      id: TaskListV2.length,
      top: 0,
      left: 0,
      ischeck: false,
    };
    AddnewTask(NoteValuesV2);

    formTag.reset();
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
export default TodoFormV2;
