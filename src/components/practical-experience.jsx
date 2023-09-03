import "../styles/cv-creator.css";
import Icon from "@mdi/react";
import { mdiArrowCollapseDown, mdiArrowCollapseUp } from "@mdi/js";
import { useState } from "react";

export default function PracticalExperience() {
  const [state, setState] = useState("closed");

  function open() {
    setState("open");
  }

  function close() {
    setState("closed");
  }

  const opened = state === "open";

  return (
    <div className="practical-experience-container">
      <h1 className="title">Experience</h1>
      {opened ? (
        <>
          <Icon
            className="arrow"
            path={mdiArrowCollapseUp}
            onClick={close}
            size={1}
          />
          <form action="">
            <div className="company-container">
              <label htmlFor="company-name">Company name </label>
              <input type="text" id="company-name" />
              <label htmlFor="position-title">Position title </label>
              <input type="text" id="position-title" />
              <div className="job-duration-container">
                <div className="date-container">
                  <label htmlFor="from">Start Date </label>
                  <input type="text" id="from" />
                </div>
                <div className="date-container">
                  <label htmlFor="to">End Date </label>
                  <input type="text" id="to" />
                </div>
              </div>
              <label htmlFor="main-responsibilities">Description </label>
              <textarea id="main-responsibilities" rows="5" cols="2" />
            </div>
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
