import React from "react";

const Footer = ({ Slack, Icon, ZuriLogo, I4GIcon, FooterText }) => {
  return (
    <>
      <div className="icons">
        <img src={Slack} alt="slack" />
        <img src={Icon} alt="github" />
      </div>
      <hr />
      <div className="footer">
        <img src={ZuriLogo} alt="Zuri Logo" />
        <img src={FooterText} alt="HNG" />
        <img src={I4GIcon} alt="I4G" />
      </div>
    </>
  );
};

export default Footer;
