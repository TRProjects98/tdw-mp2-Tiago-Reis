import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { TaskContext } from "../Context/contextFile";

function TodoFiltersV2() {
  const { ShowCtasksV2 } = useContext(TaskContext);
  const { setShowCtasksV2 } = useContext(TaskContext);
  const { ShowICtasksV2 } = useContext(TaskContext);
  const { setShowICtasksV2 } = useContext(TaskContext);

  return (
    <>
      <div className="divFilters">
        <FontAwesomeIcon icon={faFilter} size="xl" className="Filter_icon" />
        <div className="FilterOptions">
          <input
            type="checkbox"
            id="c-tasks"
            name="Show completed tasks"
            checked={ShowCtasksV2 ? "checked" : ""}
            onChange={() => {
              setShowCtasksV2((ShowCtasksV2) => !ShowCtasksV2);
            }}
          />
          <label htmlFor="c-tasks">Completed tasks</label>
          <br></br>
          <input
            type="checkbox"
            id="ic-tasks"
            name="Show incompleted tasks"
            checked={ShowICtasksV2 ? "checked" : ""}
            onChange={() => {
              setShowICtasksV2((ShowICtasksV2) => !ShowICtasksV2);
            }}
          />
          <label htmlFor="ic-tasks">Incompleted tasks</label>
          <br></br>
        </div>
      </div>
    </>
  );
}

export default TodoFiltersV2;
