/* eslint-disable react/prop-types */
import "../styles/cv-creator.css";
import { useState } from "react";
import CvPreview from "./cv-preview";
import GeneralInfo from "./general-info";
import EducationalExperience from "./educational-experience";
import PracticalExperience from "./practical-experience";

export default function CV() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });
  const [education, setEducation] = useState({
    school: "",
    study: "",
    start: "",
    end: "",
  });
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    start: "",
    end: "",
    desc: "",
  });

  function changeCompany(e) {
    setExperience({ ...experience, company: e.target.value });
  }

  function changePosition(e) {
    setExperience({ ...experience, position: e.target.value });
  }

  function changeFromExperience(e) {
    setExperience({ ...experience, start: e.target.value });
  }

  function changeToExperience(e) {
    setExperience({ ...experience, end: e.target.value });
  }

  function changeDesc(e) {
    setExperience({ ...experience, desc: e.target.value });
  }

  function changeName(e) {
    setGeneralInfo({ ...generalInfo, name: e.target.value });
  }

  function changeEmail(e) {
    setGeneralInfo({ ...generalInfo, email: e.target.value });
  }

  function changePhone(e) {
    setGeneralInfo({ ...generalInfo, phone: e.target.value });
  }

  function changeLocation(e) {
    setGeneralInfo({ ...generalInfo, location: e.target.value });
  }

  function changeSchool(e) {
    setEducation({ ...education, school: e.target.value });
  }

  function changeStudy(e) {
    setEducation({ ...education, study: e.target.value });
  }

  function changeFromEducation(e) {
    setEducation({ ...education, start: e.target.value });
  }

  function changeToEducation(e) {
    setEducation({ ...education, end: e.target.value });
  }

  return (
    <div className="cv-container">
      <div className="cv-creator-container">
        <h1 className="cv-creator-name">CV Creator</h1>
        <GeneralInfo
          info={generalInfo}
          handleName={changeName}
          handleEmail={changeEmail}
          handlePhone={changePhone}
          handleLocation={changeLocation}
        />
        <EducationalExperience
          info={education}
          handleSchool={changeSchool}
          handleStudy={changeStudy}
          handleFrom={changeFromEducation}
          handleTo={changeToEducation}
        />
        <PracticalExperience
          info={experience}
          handleCompany={changeCompany}
          handlePosition={changePosition}
          handleFrom={changeFromExperience}
          handleTo={changeToExperience}
          handleDesc={changeDesc}
        />
        <div className="buttons-container">
          <button type="submit">Submit</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <CvPreview />
    </div>
  );
}
