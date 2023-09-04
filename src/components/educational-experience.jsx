import "../styles/cv-creator.css";
import Icon from "@mdi/react";
import { mdiArrowCollapseDown, mdiArrowCollapseUp } from "@mdi/js";
import { useState } from "react";

export default function EducationalExperience() {
  const [state, setState] = useState("closed");
  const [school, setSchool] = useState("");
  const [study, setStudy] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  function changeSchool(e) {
    setSchool(e.target.value);
  }

  function changeStudy(e) {
    setStudy(e.target.value);
  }

  function changeFrom(e) {
    setFrom(e.target.value);
  }

  function changeTo(e) {
    setTo(e.target.value);
  }

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
              value={school}
              onInput={changeSchool}
            />
            <label htmlFor="title-of-study">Title of study </label>
            <input
              type="text"
              id="title-of-study"
              value={study}
              onInput={changeStudy}
            />
            <div className="study-duration-container">
              <div className="date-container">
                <label htmlFor="from">Start Date </label>
                <input
                  type="text"
                  id="from"
                  value={from}
                  onInput={changeFrom}
                  placeholder="e.g. 10/7/2016"
                />
              </div>
              <div className="date-container">
                <label htmlFor="to">End Date </label>
                <input
                  type="text"
                  id="to"
                  value={to}
                  onInput={changeTo}
                  placeholder="e.g. 20/8/2020"
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
