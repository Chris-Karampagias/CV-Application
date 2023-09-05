/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/cv-creator.css";
import Icon from "@mdi/react";
import { mdiArrowCollapseUp, mdiDelete } from "@mdi/js";

function Company({
  info,
  handleCompany,
  handlePosition,
  handleFrom,
  handleTo,
  handleDesc,
  handleStatus,
  handleRemove,
}) {
  return (
    <>
      {info.status === "open" ? (
        <div className="company">
          <Icon
            className="arrow"
            path={mdiArrowCollapseUp}
            onClick={() => {
              if (info.companyName !== "") {
                handleStatus(info);
              } else {
                alert("Enter the company's name first before closing!");
              }
            }}
            size={1}
          />
          <form action="">
            <div className="company-container">
              <label htmlFor="company-name">Company name </label>
              <input
                type="text"
                id="company-name"
                value={info.companyName}
                onInput={(e) => {
                  handleCompany(info, e);
                }}
              />
              <label htmlFor="position-title">Position title </label>
              <input
                type="text"
                id="position-title"
                value={info.positionName}
                onInput={(e) => {
                  handlePosition(info, e);
                }}
              />
              <div className="job-duration-container">
                <div className="date-container">
                  <label htmlFor="from">Start Date </label>
                  <input
                    type="text"
                    id="from"
                    value={info.from}
                    onInput={(e) => {
                      handleFrom(info, e);
                    }}
                    placeholder="e.g. 10/7/2016"
                  />
                </div>
                <div className="date-container">
                  <label htmlFor="to">End Date </label>
                  <input
                    type="text"
                    id="to"
                    value={info.to}
                    onInput={(e) => {
                      handleTo(info, e);
                    }}
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
                onInput={(e) => {
                  handleDesc(info, e);
                }}
                placeholder="e.g. Worked on the front end of Reddit's web page..."
              />
            </div>
          </form>
        </div>
      ) : (
        <div className="company-closed-container">
          <div
            className="company-name-closed"
            onClick={() => {
              handleStatus(info);
            }}
          >
            {info.companyName}
          </div>
          <Icon
            className="remove-icon"
            path={mdiDelete}
            size={1.3}
            onClick={() => {
              handleRemove(info);
            }}
          />
        </div>
      )}
    </>
  );
}

export default function PracticalExperience({
  info,
  addObj,
  handleStatus,
  handleCompany,
  handlePosition,
  handleFrom,
  handleTo,
  handleDesc,
  handleRemove,
}) {
  /* function expIsFilled(exp) {
    exp.forEach((company) => {
      if (!isFilled(company)) {
        return false;
      }
    });
    return true;
  } */

  return (
    <div className="practical-experience-container">
      <h1 className="title">Experience</h1>
      {info.length === 0 && (
        <button className="add-company-button" onClick={addObj}>
          +
        </button>
      )}
      {info.length > 0 && (
        <>
          {info.map((company, index) => {
            return (
              <Company
                key={index}
                info={company}
                handleStatus={handleStatus}
                handleCompany={handleCompany}
                handlePosition={handlePosition}
                handleFrom={handleFrom}
                handleTo={handleTo}
                handleDesc={handleDesc}
                handleRemove={handleRemove}
              />
            );
          })}
          <div className="add-company-button" onClick={addObj}>
            +
          </div>
        </>
      )}
    </div>
  );
}
