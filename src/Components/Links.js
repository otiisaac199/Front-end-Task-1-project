import React from "react";

const Links = ({ links }) => {
  return (
    <div className="link-button-container">
      {links.map((link) => {
        const { id, url, buttonText } = link;
        return (
          <a href={url} key={id} id={id} target="_blank" className="button">
            {buttonText}
          </a>
        );
      })}
    </div>
  );
};

export default Links;
