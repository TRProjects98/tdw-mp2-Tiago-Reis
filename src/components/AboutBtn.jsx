import { Link } from "react-router-dom";

function AboutBtn() {
  return (
    <>
      <div className="AboutBtn">
        <Link to="About">
          <h4>About the Project</h4>
        </Link>
      </div>
    </>
  );
}

export default AboutBtn;
