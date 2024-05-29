import React from "react";

import "./Output.css";

type SharedProps = {
  outputString: string;
};

type EmptyOutputProps = SharedProps & {
  isEmpty: true;
};

type NonEmptyOutputProps = SharedProps & {
  isEmpty: false;
  outputHeading: string;
};

type OutputProps = EmptyOutputProps | NonEmptyOutputProps;

const Output: React.FC<OutputProps> = (props) => {
  return (
    <div data-testid={props.isEmpty ? "validationOutput" : "output"}>
      {!props.isEmpty && <h2 id="outputHeading">{props.outputHeading}</h2>}
      <div className="output" id={props.isEmpty ? "validation" : "container"}>
        {props.outputString}
      </div>
    </div>
  );
};

export default Output;
