import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Delete_a_Task,
  Toogle_Ischeck,
  Set_Position,
  Counter_Maths,
} from "../store";

function StickyNoteV3({ task, index }) {
  const dispach = useDispatch();
  const CompletedTasks = useSelector((state) => state.tasks.ShowCompletedTasks);
  const IncompletedTasks = useSelector(
    (state) => state.tasks.ShowIncompletedTasks
  );

  //State Variables
  const [isVisible, setVisible] = useState();
  const [isCompleteCheck, setisCompleteChek] = useState(task.ischeck);

  //Other Variables
  const topPos = task.top;
  const leftPos = task.left;
  const NoteDiv = useRef();

  const completedToogle = () => {
    dispach(Toogle_Ischeck(Number(task.id)));
    setisCompleteChek((isCompleteCheck) => !isCompleteCheck);
    if (isCompleteCheck) {
      dispach(Counter_Maths(String("sub")));
    } else {
      dispach(Counter_Maths(String("add")));
    }
  };

  useEffect(() => {
    if (isCompleteCheck) {
      if (CompletedTasks) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    } else {
      if (IncompletedTasks) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  }, [CompletedTasks, IncompletedTasks, isCompleteCheck]);

  let cursor = {
    x: null,
    y: null,
  };
  let note = {
    dom: null,
    x: null,
    y: null,
  };

  function MDown(event) {
    cursor = {
      x: event.clientX,
      y: event.clientY,
    };
    note = {
      dom: event.target,
      x: event.target.getBoundingClientRect().left,
      y: event.target.getBoundingClientRect().top,
    };
  }

  function MMove(event) {
    if (note.dom == null) return;
    let currentCursor = {
      x: event.clientX,
      y: event.clientY,
    };
    let distance = {
      x: currentCursor.x - cursor.x,
      y: currentCursor.y - cursor.y,
    };
    note.dom.style.left = note.x + distance.x + "px";
    note.dom.style.top = note.y + distance.y + "px";
    note.dom.style.cursor = "grab";
  }

  function MUp() {
    const position_val_for_store = [
      task.id,
      note.dom.style.top,
      note.dom.style.left,
    ];
    dispach(Set_Position(position_val_for_store));
    if (note.dom == null) return;
    note.dom.style.cursor = "auto";
    note.dom = null;
  }

  return (
    <>
      <div
        className="Sticky-Note"
        key={`task${task.id}`}
        id={`task${task.id}`}
        style={{
          display: isVisible ? "flex" : "none",
          left: `${leftPos}px`,
          top: `${topPos}px`,
          backgroundColor: task.NoteColor,
        }}
        ref={NoteDiv}
        onMouseDown={MDown}
        onMouseMove={MMove}
        onMouseUp={MUp}
      >
        <p className={isCompleteCheck ? "SN-complete" : "SN-incomplete"}>
          {task.name}
        </p>
        <div className="SN-actions">
          <div>
            <input
              type="checkbox"
              id={`completed${task.id}`}
              name="completed"
              className="SN_input"
              onChange={() => completedToogle()}
              checked={isCompleteCheck ? "checked" : ""}
            />
            <label htmlFor="completed">Completed</label>
          </div>
          <div
            className="t-icon"
            onClick={() => dispach(Delete_a_Task(Number(index)))}
          >
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
      </div>
    </>
  );
}

export default StickyNoteV3;

StickyNoteV3.propTypes = {
  task: PropTypes.object,
  index: PropTypes.number,
};
