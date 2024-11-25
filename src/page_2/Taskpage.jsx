import "../App.css";
import TodoForm from "../components/TodoForm";
import TodoDisplayer from "../components/TodoDisplayer";
import TodoFilters from "../components/TodoFilters";
import { useState } from "react";
import * as React from "react";
import HomeBtn from "../components/HomeBtn";

const useLocalStorage = (storageKey, fallbackState) => {
  const [value, setValue] = React.useState(() => {
    const storedValue = localStorage.getItem(storageKey);
    if (storedValue) {
      return JSON.parse(storedValue).map((task) => ({
        ...task,
        top: parseInt(task.top, 10) || 0,
        left: parseInt(task.left, 10) || 0,
      }));
    }
    return fallbackState;
  });

  React.useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};

function Taskpage() {
  const [TaskList, setDataFromChild] = useLocalStorage("TaskList", []);
  const [ShowCtasks, setShowCtasks] = useState(true);
  const [ShowICtasks, setShowICtasks] = useState(true);

  function GetNewTask(task) {
    setDataFromChild([...TaskList, task]);
  }

  function RemoveTask(id) {
    setDataFromChild(TaskList.filter((_, index) => index !== id));
  }

  function ToggleCtasks() {
    setShowCtasks((ShowCtasks) => !ShowCtasks);
  }

  function Ischecked(checkState, id) {
    const updatedTaskList = TaskList.map((task, index) => {
      if (index === id) {
        return {
          ...task,
          ischeck: !checkState,
          top: task.top,
          left: task.left,
        };
      }
      return task;
    });
    setDataFromChild(updatedTaskList);
  }

  function Set_Position(top, left, id) {
    const updatedPosTaskList = TaskList.map((task, index) => {
      if (index === id) {
        return {
          ...task,
          top: parseInt(top, 10) || task.top,
          left: parseInt(left, 10) || task.left,
        };
      }
      return task;
    });

    setDataFromChild(updatedPosTaskList);
  }

  return (
    <div className="Todo">
      <main>
        <header>
          <nav>
            <TodoForm
              sendDataToParent={GetNewTask}
              ListLength={TaskList.length}
            />
            <TodoFilters
              filterCtasks={ShowCtasks}
              filterICtasks={ShowICtasks}
              setfilterCtasks={ToggleCtasks}
              setfilterICtasks={setShowICtasks}
            />
          </nav>
        </header>
        <HomeBtn />
        <TodoDisplayer
          List={TaskList}
          getTaskid={RemoveTask}
          showCtasks={ShowCtasks}
          showICtasks={ShowICtasks}
          Ischecked={Ischecked}
          Set_Position={Set_Position}
        />
      </main>
    </div>
  );
}

export default Taskpage;
