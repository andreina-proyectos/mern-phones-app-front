import React from "react";
import { Icon } from "semantic-ui-react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="app__footer">
      <Icon name="github" />
      <p className="footer__text">
        Open Source project created with
        <span role="img" aria-label="heart">
          ❣️
        </span>{" "}
        by
        <a
          className="link__github"
          rel="noopener noreferrer"
          href="https://github.com/andreina-proyectos"
          target="_blank"
        >
          {" "}
          <br />
          @andreina-proyectos{" "}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
