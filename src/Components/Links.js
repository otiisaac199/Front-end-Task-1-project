import React from "react";

const Links = ({ links }) => {
  return (
    <div className="link-button-container">
      {links.map((link) => {
        const { id, url, buttonText } = link;
        return (
          <button className="button">
            <a href={url} key={id} id={id}>
              {buttonText}
            </a>
          </button>
        );
      })}
    </div>
  );
};

export default Links;
