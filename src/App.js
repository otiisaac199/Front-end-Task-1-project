import "./App.css";
import React from "react";
import { linkButton } from "./Components/Data";
import { TiArrowForwardOutline } from "react-icons/ti";
import { FiMoreHorizontal } from "react-icons/fi";
import Links from "./Components/Links";
import Images from "./Components/Images";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="task-container">
      <div className="head-container">
        <div className="profile-container">
          <div className="img-container">
            <img src={Images.ProfilePics} id="profile__img" alt="" />
            <div className="img-overlay">
              <img src={Images.Camera} alt="camera" />
            </div>
          </div>
          <h2 id="twitter">Webby_345</h2>
          {/* <h2 id="slack">Oti Isaac</h2> */}
        </div>
        <div className="nav-icon">
          <div className="nav-icon-overlay share">
            {/* <img src={Images.AvatarButton} alt="" /> */}
            <TiArrowForwardOutline className="img" />
            <p className="tooltip">Share Link</p>
          </div>
          <div className="nav-icon-overlay more">
            {/* <img src={Images.AvatarButton2} /> */}
            <FiMoreHorizontal className="img" />
          </div>
        </div>
      </div>
      <Links links={linkButton} />
      <Footer {...Images} />
    </div>
  );
};

export default App;
