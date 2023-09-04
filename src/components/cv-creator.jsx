/* eslint-disable react/prop-types */
import "../styles/cv-creator.css";
import { useState } from "react";
import CvPreview from "./cv-preview";

export default function CV({ children }) {
  return (
    <div className="cv-container">
      <div className="cv-creator-container">
        <h1 className="cv-creator-name">CV Creator</h1>
        {children}
        <div className="buttons-container">
          <button type="submit">Submit</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <CvPreview />
    </div>
  );
}
