import { useContext } from "react";
import { TaskContext } from "../Context/contextFile";
import StickyNoteV2 from "./StickyNoteV2";

function TodoDisplayerV2() {
  const { TaskListV2 } = useContext(TaskContext);

  const listItems = TaskListV2.map((task, index) => (
    <StickyNoteV2 task={task} index={index} key={task.id} />
  ));

  return <>{listItems}</>;
}

export default TodoDisplayerV2;
