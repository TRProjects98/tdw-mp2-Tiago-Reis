import { Link } from "react-router-dom";
import styled from "styled-components";

const AboutBtnContainer = styled.div`
  position: fixed;
  bottom: 10px;
  left: 10px;
  padding: 5px 10px;
  border-radius: 25px;
  z-index: 10000000;
  background-color: #163372;
`;

function AboutBtn() {
  return (
    <>
      <AboutBtnContainer>
        <Link to="About">
          <h4>About the Project</h4>
        </Link>
      </AboutBtnContainer>
    </>
  );
}

export default AboutBtn;
