import "../styles/cv-preview.css";
import Icon from "@mdi/react";
import {
  mdiEmailBox,
  mdiPhone,
  mdiMapMarker,
  mdiSchool,
  mdiHammer,
} from "@mdi/js";

export default function CvPreview() {
  return (
    <div className="cv-preview-container">
      <h1 className="cv-preview-name">CV Preview</h1>
      <div className="general-info-preview-container">
        <h1 className="name-preview">John Doe</h1>
        <div className="general-info-preview">
          <div className="info-container">
            <Icon path={mdiEmailBox} size={1} />
            <h2 className="email">johndoe@cv.com</h2>
          </div>
          <div className="info-container">
            <Icon path={mdiPhone} size={1} />
            <h2 className="phone">6960505043</h2>
          </div>
          <div className="info-container">
            <Icon path={mdiMapMarker} size={1} />
            <h2 className="location">London, UK</h2>
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
              <span className="dot">•</span> Harvard
            </li>
            <li>
              <span className="dot">•</span> Mathematics BSc.
            </li>
            <li>
              <span className="dot">•</span> 8/9/2016 - Present
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
              <span className="dot">•</span> Intrasoft
            </li>
            <li>
              <span className="dot">•</span> Senior Web Developer
            </li>
            <li>
              <span className="dot">•</span> 10/7/2020 - Present
            </li>
            <li>
              <span className="dot">•</span> Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Nisi, quam nam illum cumque tenetur
              eligendi molestias soluta hic quo aliquid odit, blanditiis fugit
              itaque maxime tempora voluptas eaque in quae!
            </li>
          </ul>
        </div>
      </div>
      <div className="cv-preview-footer"></div>
    </div>
  );
}
