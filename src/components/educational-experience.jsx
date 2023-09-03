import "../styles/cv-creator.css";
import Icon from "@mdi/react";
import { mdiArrowCollapseDown, mdiArrowCollapseUp } from "@mdi/js";
import { useState } from "react";

export default function EducationalExperience() {
  const [state, setState] = useState("closed");

  function open() {
    setState("open");
  }

  function close() {
    setState("closed");
  }

  const opened = state === "open";
  return (
    <div className="educational-experience-container">
      <h1 className="title">Education</h1>
      {opened ? (
        <>
          <Icon
            className="arrow"
            path={mdiArrowCollapseUp}
            onClick={close}
            size={1}
          />
          <form action="">
            <label htmlFor="school-name">School Name </label>
            <input type="text" id="school-name" />
            <label htmlFor="title-of-study">Title of study </label>
            <input type="text" id="title-of-study" />
            <label htmlFor="date-of-study">Date of study </label>
            <input type="text" id="date-of-study" />
          </form>
        </>
      ) : (
        <>
          <Icon
            className="arrow"
            path={mdiArrowCollapseDown}
            onClick={open}
            size={1}
          />
        </>
      )}
    </div>
  );
}
