import "../styles/cv-creator.css";
import Icon from "@mdi/react";
import { mdiArrowCollapseDown } from "@mdi/js";

export default function PracticalExperience() {
  return (
    <div className="practical-experience-container">
      <h1 className="title">Practical experience</h1>
      <Icon className="arrow" path={mdiArrowCollapseDown} size={1} />
      <form action="">
        <div className="company-container">
          <label htmlFor="company-name">Company name </label>
          <input type="text" id="company-name" />
          <label htmlFor="position-title">Position title </label>
          <input type="text" id="position-title" />
          <label htmlFor="main-responsibilities">Main responsibilities </label>
          <input type="text" id="main-responsibilities" />
          <label htmlFor="from">From </label>
          <input type="date" id="from" />
          <label htmlFor="to">To </label>
          <input type="date" id="to" />
        </div>
      </form>
    </div>
  );
}
