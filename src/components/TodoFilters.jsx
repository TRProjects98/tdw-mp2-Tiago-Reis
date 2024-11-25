import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

function TodoFilters({
  filterCtasks,
  filterICtasks,
  setfilterCtasks,
  setfilterICtasks,
}) {
  function handle() {
    setfilterCtasks((filterCtasks) => !filterCtasks);
  }
  return (
    <>
      <div className="divFilters">
        <FontAwesomeIcon icon={faFilter} size="xl" className="Filter_icon" />
        <div className="FilterOptions">
          <input
            type="checkbox"
            id="c-tasks"
            name="Show completed tasks"
            checked={filterCtasks ? "checked" : ""}
            onClick={handle}
          />
          <label htmlFor="c-tasks">Completed tasks</label>
          <br></br>
          <input
            type="checkbox"
            id="ic-tasks"
            name="Show incompleted tasks"
            checked={filterICtasks ? "checked" : ""}
            onClick={() => {
              setfilterICtasks((filterICtasks) => !filterICtasks);
            }}
          />
          <label htmlFor="ic-tasks">Incompleted tasks</label>
          <br></br>
        </div>
      </div>
    </>
  );
}

export default TodoFilters;

TodoFilters.propTypes = {
  filterCtasks: PropTypes.bool,
  filterICtasks: PropTypes.bool,
  setfilterCtasks: PropTypes.func,
  setfilterICtasks: PropTypes.func,
};
