import { Link } from "react-router-dom";
function HomeBtn() {
  return (
    <Link to="/">
      <div className="HomeBtn">
        <h5>Back Home</h5>
      </div>
    </Link>
  );
}

export default HomeBtn;
