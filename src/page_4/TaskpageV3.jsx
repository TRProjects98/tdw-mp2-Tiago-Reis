import HomeBtn from "../components/HomeBtn";
import CompletedCounterV3 from "../componentsV3/CompletedCounterV3";
import TaskNavBarV3 from "../componentsV3/TaskNavBarV3";
import TodoDisplayerV3 from "../componentsV3/TodoDisplayerV3";
function TaskpageV3() {
  return (
    <>
      <div className="Todo">
        <main>
          <TaskNavBarV3 />
          <TodoDisplayerV3 />
          <CompletedCounterV3 />
          <HomeBtn />
        </main>
      </div>
    </>
  );
}
export default TaskpageV3;
