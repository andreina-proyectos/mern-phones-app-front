import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "./Page404Error.scss";

const Page404Error = (props) => {
  return (
    <>
      <div className="error-page">
        <div className="error-page__text">
          <h1>404 ERROR</h1>
          <h1>¯\_(ツ)_/¯</h1>
        </div>

        <Link basic color="purple" to="/">
          <Button basic color="purple">
            Go Home
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Page404Error;
