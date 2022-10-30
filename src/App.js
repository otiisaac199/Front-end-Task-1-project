import "./App.css";
import React from "react";
import { linkButton } from "./Components/Data";
import Links from "./Components/Links";
import Images from "./Components/Images";

const App = () => {
  return (
    <div className="task-container">
      <div className="profile-container">
        <img src={Images.ProfilePics} id="profile__img" alt="" />
        <h2 id="twitter">Webby_345</h2>
        {/* <h2 id="slack">Oti Isaac</h2> */}
      </div>
      <Links links={linkButton} />
    </div>
  );
};

export default App;
