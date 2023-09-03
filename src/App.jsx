import "./App.css";
import GeneralInfo from "./components/general-info";
import EducationalExperience from "./components/educational-experience";
import PracticalExperience from "./components/practical-experience";
import CvCreator from "./components/cv-creator";

function App() {
  return (
    <div className="app-container">
      <CvCreator>
        <GeneralInfo />
        <EducationalExperience />
        <PracticalExperience />
      </CvCreator>
      <div className="cv-preview-container"></div>
    </div>
  );
}

export default App;
