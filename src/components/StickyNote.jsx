import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useRef } from "react";

function StickyNote({
  task,
  index,
  getTaskid,
  showCtask,
  showICtask,
  checkStatus,
  getSN_Position,
}) {
  const [isVisible, setVisible] = useState();
  const [isCompleteCheck, setisCompleteChek] = useState(task.ischeck);
  const topPos = task.top;
  const leftPos = task.left;
  const NoteDiv = useRef();

  const completedToogle = () => {
    checkStatus(isCompleteCheck, task.id);
    setisCompleteChek((isCompleteCheck) => !isCompleteCheck);
  };

  useEffect(() => {
    if (isCompleteCheck) {
      if (showCtask) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    } else {
      if (showICtask) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  }, [showCtask, showICtask, isCompleteCheck]);

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
    getSN_Position(note.dom.style.top, note.dom.style.left, task.id);
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
          left: `${leftPos}px`, // Add px units to ensure CSS recognizes the values correctly
          top: `${topPos}px`,
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
          <div onClick={() => getTaskid(index)} className="t-icon">
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
      </div>
    </>
  );
}

export default StickyNote;

StickyNote.propTypes = {
  task: PropTypes.object,
  index: PropTypes.number,
  getTaskid: PropTypes.func,
  showCtask: PropTypes.bool,
  showICtask: PropTypes.bool,
  checkStatus: PropTypes.func,
  getSN_Position: PropTypes.func,
};
