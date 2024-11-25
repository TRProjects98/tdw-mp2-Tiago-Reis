import TodoFormV3 from "./TodoFormV3";
import TodoFiltersV3 from "./TodoFiltersV3";

function TaskNavBarV3() {
  return (
    <header>
      <nav>
        <TodoFormV3 />
        <TodoFiltersV3 />
      </nav>
    </header>
  );
}
export default TaskNavBarV3;
