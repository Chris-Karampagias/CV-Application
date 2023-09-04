/* eslint-disable react/prop-types */
import "../styles/cv-creator.css";
import Icon from "@mdi/react";
import { mdiArrowCollapseDown, mdiArrowCollapseUp } from "@mdi/js";
import { useState } from "react";

export default function GeneralInfo({
  info,
  handleName,
  handleEmail,
  handlePhone,
  handleLocation,
}) {
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
            <input
              type="text"
              id="name"
              value={info.name}
              onInput={handleName}
            />
            <label htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              value={info.email}
              onInput={handleEmail}
              placeholder="e.g. johndoe@cv.com"
            />
            <label htmlFor="phone">Phone Number </label>
            <input
              type="tel"
              id="phone"
              value={info.phone}
              onInput={handlePhone}
            />
            <label htmlFor="location">Location </label>
            <input
              type="text"
              id="location"
              value={info.location}
              onInput={handleLocation}
              placeholder="e.g. London,UK"
            />
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
