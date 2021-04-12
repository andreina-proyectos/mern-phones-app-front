import React from "react";
import { Message } from "semantic-ui-react";

const ErrorMessage = (props) => (
  <Message negative>
    <Message.Header>{props.textMessage}</Message.Header>
    <p>Refresh your page</p>
  </Message>
);

export default ErrorMessage;
