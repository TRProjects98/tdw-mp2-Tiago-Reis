import StickyNote from "./StickyNote";
import { useSelector } from "react-redux";

function TodoDisplayer() {
  const tasks = useSelector((state) => state.tasks.AllTasks);
  const listItems = tasks.map((task, index) => (
    <StickyNote task={task} key={task.id} index={index} />
  ));

  return <>{listItems}</>;
}

export default TodoDisplayer;
