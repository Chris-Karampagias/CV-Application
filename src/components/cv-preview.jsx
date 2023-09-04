import "../styles/cv-preview.css";
import Icon from "@mdi/react";
import {
  mdiEmailBox,
  mdiPhone,
  mdiMapMarker,
  mdiSchool,
  mdiHammer,
} from "@mdi/js";

export default function CvPreview({ general, education, experience }) {
  return (
    <div className="cv-preview-container">
      <h1 className="cv-preview-name">CV Preview</h1>
      <div className="general-info-preview-container">
        <h1 className="name-preview">{general.name}</h1>
        <div className="general-info-preview">
          <div className="info-container">
            <Icon path={mdiEmailBox} size={1} />
            <h2 className="email">{general.email}</h2>
          </div>
          <div className="info-container">
            <Icon path={mdiPhone} size={1} />
            <h2 className="phone">{general.phone}</h2>
          </div>
          <div className="info-container">
            <Icon path={mdiMapMarker} size={1} />
            <h2 className="location">{general.location}</h2>
          </div>
        </div>
      </div>
      <div className="education-work-container">
        <div className="education-preview-container">
          <div className="title-container">
            <Icon className="preview-icon" path={mdiSchool} size={1.5} />
            <h2 className="title-preview">Education</h2>
          </div>
          <ul>
            <li>
              <span className="dot">•</span> {education.school}
            </li>
            <li>
              <span className="dot">•</span> {education.study}
            </li>
            <li>
              <span className="dot">•</span> {education.start} - {education.end}
            </li>
          </ul>
        </div>
        <div className="experience-preview-container">
          <div className="title-container">
            <Icon className="preview-icon" path={mdiHammer} size={1.5} />
            <h2 className="title-preview">Experience</h2>
          </div>
          <ul>
            <li>
              <span className="dot">•</span> {experience.company}
            </li>
            <li>
              <span className="dot">•</span> {experience.position}
            </li>
            <li>
              <span className="dot">•</span> {experience.start} -{" "}
              {experience.end}
            </li>
            <li>
              <span className="dot">•</span> {experience.desc}
            </li>
          </ul>
        </div>
      </div>
      <div className="cv-preview-footer"></div>
    </div>
  );
}
