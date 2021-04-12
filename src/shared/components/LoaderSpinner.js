import React from "react";
import { Dimmer, Loader, Image } from "semantic-ui-react";

const LoaderSpinner = (props) => (
  <div>
    <Dimmer active inverted>
      <Loader inverted>
        {props.isFromHome ? "Loading Phones..." : "Loading Phone..."}
      </Loader>
    </Dimmer>
    <Image src="/images/wireframe/short-paragraph.png" />
  </div>
);

export default LoaderSpinner;
