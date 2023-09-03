import "../styles/cv-creator.css";
import Icon from "@mdi/react";
import { mdiArrowCollapseDown } from "@mdi/js";

export default function EducationalExperience() {
  return (
    <div className="educational-experience-container">
      <h1 className="title">Education</h1>
      <Icon className="arrow" path={mdiArrowCollapseDown} size={1} />
      <form action="">
        <label htmlFor="school-name">School Name </label>
        <input type="text" id="school-name" />
        <label htmlFor="title-of-study">Title of study </label>
        <input type="text" id="title-of-study" />
        <label htmlFor="date-of-study">Date of study </label>
        <input type="text" id="date-of-study" />
      </form>
    </div>
  );
}
