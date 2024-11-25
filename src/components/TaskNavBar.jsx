import TodoForm from "./TodoForm";
import TodoFilters from "./TodoFilters";

function TaskNavBar() {
  return (
    <header>
      <nav>
        <TodoForm />
        <TodoFilters />
      </nav>
    </header>
  );
}
export default TaskNavBar;
