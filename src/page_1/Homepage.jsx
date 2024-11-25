import { Link } from "react-router-dom";
function Homepage() {
  return (
    <>
      <section className="HSsection">
        <h1>Welcome to the Sicky Note App</h1>
        <p>Create your tasks now!!!</p>
        <div>
          <Link className="HomeLinks" to="/Taskpage">
            V1<br></br>
            Callback Functions
          </Link>
          <Link className="HomeLinks" to="/TaskpageV2">
            V2 <br></br>
            useEffect
          </Link>
          <Link className="HomeLinks" to="/TaskpageV3">
            V3<br></br>
            Redux
          </Link>
        </div>
      </section>
    </>
  );
}

export default Homepage;
