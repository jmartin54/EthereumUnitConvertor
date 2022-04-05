import React, { useContext, useState } from "react";
import "./Styles/App.css";

import Header from "./Header";
import Body from "./Body";
import PanelContext from "./Contexts/PanelContext";

function App() {
  const [showing, setShowing] = useState(true);
  return (
    <div id="app">
      <PanelContext.Provider
        value={{ showing: showing, setShowing: (show) => setShowing(show) }}
      >
        <Header />
        <Body />
      </PanelContext.Provider>
    </div>
  );
}

export default App;
