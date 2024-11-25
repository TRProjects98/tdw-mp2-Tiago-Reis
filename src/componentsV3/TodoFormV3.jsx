import { useSelector, useDispatch } from "react-redux";
import { Add_a_Task } from "../store";
import { useState } from "react";

function TodoFormV3() {
  const [color, setColor] = useState("#e2e052");
  const dispach = useDispatch();
  const tasks = useSelector((state) => state.tasks.AllTasks);

  const formHandler = (e) => {
    e.preventDefault();

    const inpuTask = document.querySelector("#formTaskInput").value;
    const formTag = document.querySelector("form");

    const NoteValuesV3 = {
      name: inpuTask,
      id: tasks.length,
      top: 0,
      left: 0,
      ischeck: false,
      NoteColor: color,
    };

    dispach(Add_a_Task(Object(NoteValuesV3)));

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
            type="color"
            id="formColorTaskInput"
            name="formColorTaskInput"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          ></input>
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
export default TodoFormV3;
