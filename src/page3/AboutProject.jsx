import { Link } from "react-router-dom";
import styled from "styled-components";

const AboutSectionContainer = styled.section`
  background-color: #163372;
  color: white;
  height: 100vh;
  padding: 30px;

  a > p {
    margin-bottom: 20px;
  }
`;

const AboutTechsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: 300px;

  img {
    width: 100px;
  }
`;
function AboutProject() {
  return (
    <>
      <AboutSectionContainer>
        <h1>Hello</h1>
        <Link to="/">
          <p>Back home</p>
        </Link>
        <p>
          This project is an interactive weather application that integrates
          Google Maps and the OpenWeather API to provide users with dynamic,
          location-based weather data. Users can click on a map to add a marker
          and instantly retrieve the weather forecast for the selected location,
          along with the place's name derived from reverse geocoding. The app
          employs modern React tools like @react-google-maps/api for seamless
          map rendering and Redux Toolkit for state management, ensuring an
          organized and scalable structure. Additionally, routing via
          react-router-dom allows navigation between pages, including detailed
          weather breakdowns for specific days.
        </p>
        <p>
          The application demonstrates advanced web development practices,
          combining geolocation services, API integration, and React's
          declarative component architecture. Its functionality is enhanced by
          features such as dynamic weather icons, location banners, and links to
          detailed daily forecasts. This project not only provides practical
          utility but also highlights modern development patterns, including
          reusable components, centralized state management, and a responsive,
          user-friendly interface. It showcases how multiple APIs and libraries
          can be orchestrated to build engaging, data-driven applications.
        </p>
        <AboutTechsContainer>
          <img src="/MapsAPI.svg" alt="Logo" />
          <img src="/react.svg" alt="Logo" />
          <img src="/redux.svg" alt="Logo" />
          <img src="/OpenWatherAPI.png" alt="Logo" />
        </AboutTechsContainer>
      </AboutSectionContainer>
    </>
  );
}

export default AboutProject;
