import HomeBtn from "../components/HomeBtn";
import CompletedCounter from "../components/CompletedCounter";
import TaskNavBar from "../components/TaskNavBar";
import TodoDisplayer from "../components/TodoDisplayer";
function Taskpage() {
  return (
    <>
      <div className="Todo">
        <main>
          <TaskNavBar />
          <TodoDisplayer />
          <CompletedCounter />
          <HomeBtn />
        </main>
      </div>
    </>
  );
}
export default Taskpage;
