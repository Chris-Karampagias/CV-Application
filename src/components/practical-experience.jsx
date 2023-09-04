import "../styles/cv-creator.css";
import Icon from "@mdi/react";
import { mdiArrowCollapseDown, mdiArrowCollapseUp } from "@mdi/js";
import { useState } from "react";

export default function PracticalExperience() {
  const [state, setState] = useState("closed");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [desc, setDesc] = useState("");

  function changeCompany(e) {
    setCompany(e.target.value);
  }

  function changePosition(e) {
    setPosition(e.target.value);
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

  function changeDesc(e) {
    setDesc(e.target.value);
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
              <input
                type="text"
                id="company-name"
                value={company}
                onInput={changeCompany}
              />
              <label htmlFor="position-title">Position title </label>
              <input
                type="text"
                id="position-title"
                value={position}
                onInput={changePosition}
              />
              <div className="job-duration-container">
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
                    placeholder="e.g. 20/8/2020 / Present"
                  />
                </div>
              </div>
              <label htmlFor="main-responsibilities">Description </label>
              <textarea
                id="main-responsibilities"
                rows="5"
                cols="2"
                value={desc}
                onInput={changeDesc}
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
