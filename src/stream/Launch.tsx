import React from "react";
import { Button } from "semantic-ui-react";
import "./Launch.css";

interface LaunchProps {
  Launch: () => void;
}

export const LaunchView: React.FC<LaunchProps> = (props: LaunchProps) => {
  return (
    <div id="launchContainer">
      <div>
        {/* <h1>{client.description}</h1> */}
        <Button
          size="massive"
          color="blue"
          circular
          icon="play"
          onClick={() => props.Launch()}
        ></Button>
      </div>
      {/* <img alt="PureWeb Logo" src="/pureweb.svg" style={{ width: 100, position: 'absolute', bottom: 50, right: 10 }} /> */}
    </div>
  );
};
