import StickyNoteV3 from "./StickyNoteV3";
import { useSelector } from "react-redux";

function TodoDisplayerV3() {
  const tasks = useSelector((state) => state.tasks.AllTasks);
  const listItems = tasks.map((task, index) => (
    <StickyNoteV3 task={task} key={task.id} index={index} />
  ));

  return <>{listItems}</>;
}

export default TodoDisplayerV3;
