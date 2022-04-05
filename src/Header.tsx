import React, { useContext } from "react";
import Button from "./Components/Button";
import PanelContext from "./Contexts/PanelContext";

const Header = () => {
  const { showing, setShowing } = useContext(PanelContext);
  return (
    <header className="App-header">
      <h1> Ether Unit Converter</h1>
      {!showing && (
        <Button text="show panel" onClick={() => setShowing(true)} />
      )}
      {showing && (
        <Button text="hide panel" onClick={() => setShowing(false)} />
      )}
    </header>
  );
};

export default Header;
