import { useContext } from "react";
import { TaskContext } from "../Context/contextFile";

function CompletedCounter() {
  const { Ccounter } = useContext(TaskContext);

  return (
    <>
      <div className="CTcounter">
        <h1>{Ccounter}</h1>
        {Ccounter === 1 ? <p>Task Completed </p> : <p>Tasks Completed </p>}
      </div>
    </>
  );
}
export default CompletedCounter;
