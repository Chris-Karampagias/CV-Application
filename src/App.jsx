import "./App.css";
import GeneralInfo from "./components/general-info";
import EducationalExperience from "./components/educational-experience";
import PracticalExperience from "./components/practical-experience";
import CV from "./components/cv-creator";

function App() {
  return (
    <>
      <CV>
        <GeneralInfo />
        <EducationalExperience />
        <PracticalExperience />
      </CV>
    </>
  );
}

export default App;
