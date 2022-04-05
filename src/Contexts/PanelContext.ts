import React from "react";

const PanelContext = React.createContext({
  showing: true,
  setShowing: (value: boolean) => {},
});

export default PanelContext;
