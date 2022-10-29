import "./App.css";
import React from "react";
import { linkButton } from "./Components/Data";
import Links from "./Components/Links";
import Images from "./Components/Images";

const App = () => {
  return (
    <div className="task-container">
      <div className="profile-container">
        <img src={Images.ProfilePics} alt="" />
        <h3>Oti Isaac</h3>
      </div>
      <Links links={linkButton} />
    </div>
  );
};

export default App;
