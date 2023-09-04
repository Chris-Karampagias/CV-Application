/* eslint-disable react/prop-types */
import "../styles/cv-creator.css";
import Icon from "@mdi/react";
import { mdiArrowCollapseDown, mdiArrowCollapseUp } from "@mdi/js";
import { useState } from "react";

export default function PracticalExperience({
  info,
  handleCompany,
  handlePosition,
  handleFrom,
  handleTo,
  handleDesc,
}) {
  const [state, setState] = useState("closed");

  const opened = state === "open";

  function open() {
    setState("open");
  }

  function close() {
    setState("closed");
  }
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
              <input
                type="text"
                id="company-name"
                value={info.company}
                onInput={handleCompany}
              />
              <label htmlFor="position-title">Position title </label>
              <input
                type="text"
                id="position-title"
                value={info.position}
                onInput={handlePosition}
              />
              <div className="job-duration-container">
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
              <label htmlFor="main-responsibilities">Description </label>
              <textarea
                id="main-responsibilities"
                rows="5"
                cols="2"
                value={info.desc}
                onInput={handleDesc}
                placeholder="e.g. Worked on the front end of Reddit's web page..."
              />
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
