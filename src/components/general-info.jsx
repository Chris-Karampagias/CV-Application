import "../styles/cv-creator.css";
import Icon from "@mdi/react";
import { mdiArrowCollapseDown, mdiArrowCollapseUp } from "@mdi/js";
import { useState } from "react";

export default function GeneralInfo() {
  const [state, setState] = useState("open");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  function changeName(e) {
    setName(e.target.value);
  }

  function changeEmail(e) {
    setEmail(e.target.value);
  }

  function changePhone(e) {
    setPhone(e.target.value);
  }

  function changeLocation(e) {
    setLocation(e.target.value);
  }

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
            <input type="text" id="name" value={name} onInput={changeName} />
            <label htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              value={email}
              onInput={changeEmail}
              placeholder="e.g. johndoe@cv.com"
            />
            <label htmlFor="phone">Phone Number </label>
            <input type="tel" id="phone" value={phone} onInput={changePhone} />
            <label htmlFor="location">Location </label>
            <input
              type="text"
              id="location"
              value={location}
              onInput={changeLocation}
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
