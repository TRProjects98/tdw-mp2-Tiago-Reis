import { Link } from "react-router-dom";
function Homepage() {
  return (
    <>
      <section className="HSsection">
        <h1>Welcome to the Sicky Note App</h1>
        <p>Create your tasks now!!!</p>
        <div>
          <Link className="HomeLinks" to="/Taskpage">
            Stick it into a Note!
          </Link>
        </div>
      </section>
    </>
  );
}

export default Homepage;
