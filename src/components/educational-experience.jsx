/* eslint-disable react/prop-types */
import "../styles/cv-creator.css";
import Icon from "@mdi/react";
import { mdiArrowCollapseDown, mdiArrowCollapseUp } from "@mdi/js";
import { useState } from "react";

export default function EducationalExperience({
  info,
  handleSchool,
  handleStudy,
  handleFrom,
  handleTo,
}) {
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
            <input
              type="text"
              id="school-name"
              value={info.school}
              onInput={handleSchool}
            />
            <label htmlFor="title-of-study">Title of study </label>
            <input
              type="text"
              id="title-of-study"
              value={info.study}
              onInput={handleStudy}
            />
            <div className="study-duration-container">
              <div className="date-container">
                <label htmlFor="from">Start Date </label>
                <input
                  type="text"
                  id="from"
                  value={info.start}
                  onInput={handleFrom}
                  placeholder="e.g. 10/7/2016"
                />
              </div>
              <div className="date-container">
                <label htmlFor="to">End Date </label>
                <input
                  type="text"
                  id="to"
                  value={info.end}
                  onInput={handleTo}
                  placeholder="e.g. 20/8/2020 / Present"
                />
              </div>
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
