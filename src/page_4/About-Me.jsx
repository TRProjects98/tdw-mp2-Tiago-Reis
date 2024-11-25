import HomeBtn from "../components/HomeBtn";
function AboutMe() {
  return (
    <>
      <section className="AboutSec">
        <div>
          <div className="AboutDescr">
            <h1>About this project</h1>
            <p>
              This project was designed for those who tend to forget things and
              rely on sticky notes to stay on top of their tasks!
            </p>
            <p>Here, you can create as many sticky notes as you need.</p>
            <p>With this tool, you will never miss a task again!</p>
          </div>
          <div className="AboutTech">
            <h1>This project was made with</h1>
            <div className="TechImg">
              <img src="/vite.svg" />
              <img src="/react.svg" />
              <img src="/redux.svg" />
            </div>
          </div>
        </div>
      </section>
      <HomeBtn />
    </>
  );
}
export default AboutMe;
