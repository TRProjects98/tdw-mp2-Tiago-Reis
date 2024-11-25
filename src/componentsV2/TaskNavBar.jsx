import TodoFormV2 from "./TodoFormV2";
import TodoFiltersV2 from "./TodoFiltersV2";

function TaskNavBar() {
  return (
    <header>
      <nav>
        <TodoFormV2 />
        <TodoFiltersV2 />
      </nav>
    </header>
  );
}
export default TaskNavBar;
