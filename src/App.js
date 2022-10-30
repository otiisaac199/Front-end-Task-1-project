import "./App.css";
import React from "react";
import { linkButton } from "./Components/Data";
import Links from "./Components/Links";
import Images from "./Components/Images";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="task-container">
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
      <Links links={linkButton} />
      <Footer {...Images} />
    </div>
  );
};

export default App;
