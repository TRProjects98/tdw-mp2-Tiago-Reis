import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useRef } from "react";
import { useContext } from "react";
import { TaskContext } from "../Context/contextFile";

function StickyNoteV2({ task, index }) {
  //Context Variables
  const { RemoveTask } = useContext(TaskContext);
  const { Set_Position } = useContext(TaskContext);
  const { Ischecked } = useContext(TaskContext);
  const { ShowCtasksV2 } = useContext(TaskContext);
  const { ShowICtasksV2 } = useContext(TaskContext);
  let { Ccounter } = useContext(TaskContext);
  const { setCcounter } = useContext(TaskContext);

  //State Variables
  const [isVisible, setVisible] = useState();
  const [isCompleteCheck, setisCompleteChek] = useState(task.ischeck);

  //Other Variables
  const topPos = task.top;
  const leftPos = task.left;
  const NoteDiv = useRef();

  const completedToogle = () => {
    Ischecked(isCompleteCheck, task.id);
    setisCompleteChek((isCompleteCheck) => !isCompleteCheck);
    if (isCompleteCheck) {
      setCcounter((Ccounter) => Ccounter - 1);
    } else {
      setCcounter((Ccounter) => Ccounter + 1);
    }
  };

  useEffect(() => {
    if (isCompleteCheck) {
      if (ShowCtasksV2) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    } else {
      if (ShowICtasksV2) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  }, [ShowCtasksV2, ShowICtasksV2, isCompleteCheck, Ccounter, setCcounter]);

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
    Set_Position(note.dom.style.top, note.dom.style.left, task.id);
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
            onClick={() => {
              RemoveTask(index);
            }}
            className="t-icon"
          >
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
      </div>
    </>
  );
}

export default StickyNoteV2;

StickyNoteV2.propTypes = {
  task: PropTypes.object,
  index: PropTypes.number,
};
