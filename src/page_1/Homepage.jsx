import { Link } from "react-router-dom";
function Homepage() {
  return (
    <>
      <section className="HSsection">
        <h1>Welcome to the Sicky Note App</h1>
        <Link to="/AboutMe">About this project</Link>
        <div>
          <Link className="HomeLinks" to="/Taskpage">
            Create your tasks now!!!
          </Link>
        </div>
      </section>
    </>
  );
}

export default Homepage;
