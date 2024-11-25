import StickyNote from "./StickyNote";
import PropTypes from "prop-types";

function TodoDisplayer({
  List,
  getTaskid,
  showCtasks,
  showICtasks,
  Ischecked,
  Set_Position,
}) {
  function checkStatus(check, id) {
    Ischecked(check, id);
  }

  function getSN_Position(top, left, id) {
    Set_Position(top, left, id);
  }

  const listItems = List.map((task, index) => (
    <StickyNote
      task={task}
      index={index}
      getTaskid={getTaskid}
      showCtask={showCtasks}
      showICtask={showICtasks}
      key={task.id}
      checkStatus={checkStatus}
      getSN_Position={getSN_Position}
    />
  ));

  return <>{listItems}</>;
}

export default TodoDisplayer;

TodoDisplayer.propTypes = {
  List: PropTypes.array,
  getTaskid: PropTypes.func,
  showCtasks: PropTypes.bool,
  showICtasks: PropTypes.bool,
  Ischecked: PropTypes.func,
  Set_Position: PropTypes.func,
};
