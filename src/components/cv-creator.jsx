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
  const [experience, setExperience] = useState([]);

  const [status, setStatus] = useState("edit");

  function addObj() {
    setExperience([
      ...experience,
      {
        companyName: "",
        positionName: "",
        from: "",
        to: "",
        desc: "",
        status: "open",
      },
    ]);
  }

  function isFilled(obj) {
    const values = Object.values(obj);
    if (values.includes("")) {
      return false;
    }
    return true;
  }

  function deleteJob(selectedCompany) {
    const newExperience = [...experience];
    newExperience.forEach((company) => {
      let companyIndex = newExperience.indexOf(company);
      if (companyIndex === newExperience.indexOf(selectedCompany)) {
        newExperience.splice(companyIndex, 1);
        setExperience(newExperience);
      }
    });
  }

  function changeStatus(selectedCompany) {
    const newExperience = [...experience];
    newExperience.forEach((company) => {
      let companyIndex = newExperience.indexOf(company);
      if (companyIndex === newExperience.indexOf(selectedCompany)) {
        newExperience[companyIndex] = {
          ...selectedCompany,
          status: selectedCompany.status === "closed" ? "open" : "closed",
        };
        setExperience(newExperience);
      }
    });
  }

  function changeCompany(selectedCompany, e) {
    const newExperience = [...experience];
    newExperience.forEach((company) => {
      let companyIndex = newExperience.indexOf(company);
      if (companyIndex === newExperience.indexOf(selectedCompany)) {
        newExperience[companyIndex] = {
          ...selectedCompany,
          companyName: e.target.value,
        };
        setExperience(newExperience);
      }
    });
  }

  function changePosition(selectedCompany, e) {
    const newExperience = [...experience];
    newExperience.forEach((company) => {
      let companyIndex = newExperience.indexOf(company);
      if (companyIndex === newExperience.indexOf(selectedCompany)) {
        newExperience[companyIndex] = {
          ...selectedCompany,
          positionName: e.target.value,
        };
        setExperience(newExperience);
      }
    });
  }

  function changeFromExperience(selectedCompany, e) {
    const newExperience = [...experience];
    newExperience.forEach((company) => {
      let companyIndex = newExperience.indexOf(company);
      if (companyIndex === newExperience.indexOf(selectedCompany)) {
        newExperience[companyIndex] = {
          ...selectedCompany,
          from: e.target.value,
        };
        setExperience(newExperience);
      }
    });
  }

  function changeToExperience(selectedCompany, e) {
    const newExperience = [...experience];
    newExperience.forEach((company) => {
      let companyIndex = newExperience.indexOf(company);
      if (companyIndex === newExperience.indexOf(selectedCompany)) {
        newExperience[companyIndex] = {
          ...selectedCompany,
          to: e.target.value,
        };
        setExperience(newExperience);
      }
    });
  }

  function changeDesc(selectedCompany, e) {
    const newExperience = [...experience];
    newExperience.forEach((company) => {
      let companyIndex = newExperience.indexOf(company);
      if (companyIndex === newExperience.indexOf(selectedCompany)) {
        newExperience[companyIndex] = {
          ...selectedCompany,
          desc: e.target.value,
        };
        setExperience(newExperience);
      }
    });
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
        {status === "edit" ? (
          <>
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
              addObj={addObj}
              handleStatus={changeStatus}
              handleRemove={deleteJob}
            />
          </>
        ) : (
          <>
            <GeneralInfo
              info={{
                name: "",
                email: "",
                phone: "",
                location: "",
              }}
              handleName={changeName}
              handleEmail={changeEmail}
              handlePhone={changePhone}
              handleLocation={changeLocation}
            />
            <EducationalExperience
              info={{
                school: "",
                study: "",
                start: "",
                end: "",
              }}
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
              isFilled={isFilled}
            />
          </>
        )}
        <div className="buttons-container">
          <button
            type="submit"
            onClick={() => {
              if (
                isFilled(generalInfo) &&
                isFilled(education) &&
                isFilled(experience)
              )
                setStatus("submit");
            }}
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => {
              setStatus("edit");
            }}
          >
            Edit
          </button>
        </div>
      </div>
      {status === "edit" ? (
        <>
          <CvPreview
            general={{
              name: "(name)",
              email: "(email)",
              phone: "(phone number)",
              location: "(location)",
            }}
            education={{
              school: "(school name)",
              study: "(title of study)",
              start: "(start date)",
              end: "(end date)",
            }}
            experience={[
              {
                companyName: "(company name)",
                positionName: "(position title)",
                from: "(start date)",
                to: "(end date)",
                desc: "(description)",
              },
            ]}
          />
        </>
      ) : (
        <>
          <CvPreview
            general={generalInfo}
            education={education}
            experience={experience}
          />
        </>
      )}
    </div>
  );
}
