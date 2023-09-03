import "../styles/cv-creator.css";
import Icon from "@mdi/react";
import { mdiArrowCollapseDown } from "@mdi/js";

export default function GeneralInfo() {
  return (
    <div className="general-info-container">
      <h1 className="title">General Info</h1>
      <Icon className="arrow" path={mdiArrowCollapseDown} size={1} />
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
    </div>
  );
}
