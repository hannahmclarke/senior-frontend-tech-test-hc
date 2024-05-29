import * as React from "react";

export const defaultState = {
  initialInputValue: "",
  initialShiftValue: 1,
  initialConvertedString: "",
  initialOutputHeading: "",
  initialButtonClicked: false,
};

export const AppContext = React.createContext(defaultState);
