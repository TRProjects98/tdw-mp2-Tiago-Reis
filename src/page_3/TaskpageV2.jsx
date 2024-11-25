import HomeBtn from "../components/HomeBtn";
import TodoDisplayerV2 from "../componentsV2/TodoDisplayerV2";
import CompletedCounter from "../componentsV2/CompletedCounter";
import TaskNavBar from "../componentsV2/TaskNavBar";
import { useState } from "react";
import { TaskContext } from "../Context/contextFile";
import * as React from "react";

// Custom hook for using localStorage
const useLocalStorage = (storageKey, fallbackState) => {
  const [value, setValue] = React.useState(() => {
    const storedValue = localStorage.getItem(storageKey);
    if (storedValue) {
      return JSON.parse(storedValue);
    }
    return fallbackState;
  });

  React.useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};

function TaskpageV2() {
  const [TaskListV2, setTLV2] = useLocalStorage("TaskListV2", []);
  const [ShowCtasksV2, setShowCtasksV2] = useState(true);
  const [ShowICtasksV2, setShowICtasksV2] = useState(true);
  const [Ccounter, setCcounter] = useLocalStorage("Ccounter", 0);

  function AddnewTask(task) {
    setTLV2([...TaskListV2, task]);
  }

  function RemoveTask(id) {
    setTLV2(TaskListV2.filter((_, index) => index !== id));
    if (TaskListV2[id].ischeck) {
      if (Ccounter > 0) {
        setCcounter((Ccounter) => Ccounter - 1);
      }
    }
  }

  function Set_Position(top, left, id) {
    const updatedPosTaskListV2 = TaskListV2.map((task, index) => {
      if (index === id) {
        return {
          ...task,
          top: parseInt(top, 10) || task.top,
          left: parseInt(left, 10) || task.left,
        };
      }
      return task;
    });

    setTLV2(updatedPosTaskListV2);
  }

  function Ischecked(checkState, id) {
    const updatedTaskListV2 = TaskListV2.map((task, index) => {
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
    setTLV2(updatedTaskListV2);
  }

  return (
    <>
      <TaskContext.Provider
        value={{
          TaskListV2,
          AddnewTask,
          RemoveTask,
          Set_Position,
          Ischecked,
          ShowCtasksV2,
          setShowCtasksV2,
          ShowICtasksV2,
          setShowICtasksV2,
          Ccounter,
          setCcounter,
        }}
      >
        <div className="Todo">
          <main>
            <TaskNavBar />
            <TodoDisplayerV2 />
            <HomeBtn />
            <CompletedCounter />
          </main>
        </div>
      </TaskContext.Provider>
    </>
  );
}

export default TaskpageV2;
