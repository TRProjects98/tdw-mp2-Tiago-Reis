import { useSelector } from "react-redux";

function CompletedCounterV3() {
  const Ccounter = useSelector((state) => state.tasks.Counter);

  return (
    <>
      <div className="CTcounter">
        <h1>{Ccounter}</h1>
        {Ccounter === 1 ? <p>Task Completed </p> : <p>Tasks Completed </p>}
      </div>
    </>
  );
}
export default CompletedCounterV3;
