import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { Toogle_Filters } from "../store";
function TodoFiltersV3() {
  const dispach = useDispatch();
  const CompletedTasks = useSelector((state) => state.tasks.ShowCompletedTasks);
  const IncompletedTasks = useSelector(
    (state) => state.tasks.ShowIncompletedTasks
  );
  return (
    <>
      <div className="divFilters">
        <FontAwesomeIcon icon={faFilter} size="xl" className="Filter_icon" />
        <div className="FilterOptions">
          <input
            type="checkbox"
            id="c-tasks"
            name="Show completed tasks"
            checked={CompletedTasks ? "checked" : ""}
            onChange={() => {
              dispach(Toogle_Filters(String("CT")));
            }}
          />
          <label htmlFor="c-tasks">Completed tasks</label>
          <br></br>
          <input
            type="checkbox"
            id="ic-tasks"
            name="Show incompleted tasks"
            checked={IncompletedTasks ? "checked" : ""}
            onChange={() => {
              dispach(Toogle_Filters(String("ICT")));
            }}
          />
          <label htmlFor="ic-tasks">Incompleted tasks</label>
          <br></br>
        </div>
      </div>
    </>
  );
}

export default TodoFiltersV3;
