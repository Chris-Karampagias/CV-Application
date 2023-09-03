/* eslint-disable react/prop-types */
import "../styles/cv-creator.css";

export default function CvCreator({ children }) {
  return (
    <div className="cv-creator-container">
      <h1 className="cv-creator-name">CV Creator</h1>
      <div className="buttons-container">
        <button type="submit">Submit</button>
        <button type="button">Edit</button>
      </div>
      {children}
    </div>
  );
}
