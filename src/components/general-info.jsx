import "../styles/cv-creator.css";
import Icon from "@mdi/react";
import { mdiArrowCollapseDown, mdiArrowCollapseUp } from "@mdi/js";
import { useState } from "react";

export default function GeneralInfo() {
  const [state, setState] = useState("open");

  function open() {
    setState("open");
  }

  function close() {
    setState("closed");
  }

  const opened = state === "open";

  return (
    <div className="general-info-container">
      <h1 className="title">General Info</h1>
      {opened ? (
        <>
          <Icon
            className="arrow"
            path={mdiArrowCollapseUp}
            onClick={close}
            size={1}
          />
          <form action="">
            <label htmlFor="name">Full name </label>
            <input type="text" id="name" />
            <label htmlFor="email">Email </label>
            <input type="email" id="email" />
            <label htmlFor="phone">Phone Number </label>
            <input type="tel" id="phone" />
            <label htmlFor="location">Location </label>
            <input type="text" id="location" />
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
