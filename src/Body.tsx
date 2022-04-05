import React, { useCallback, useContext, useState } from "react";
import EthInput from "./Components/EthInput";
import PanelContext from "./Contexts/PanelContext";
import units, { Unit } from "./Models/Unit";
import "./Styles/Body.css";

const Body = () => {
  // state
  const [wei, setWei] = useState<number | undefined>();
  const { showing } = useContext(PanelContext);

  // handlers
  const handleChange = useCallback((wei: number) => {
    setWei(wei);
  }, []);

  // display-not showing
  if (!showing) return <></>;

  // display-showing
  return (
    <div id="body">
      {Object.keys(units).map((unit) => (
        <EthInput
          wei={wei}
          unit={unit as Unit}
          unitMultiple={units[unit as Unit]}
          onChange={handleChange}
        />
      ))}
      <sub>Tap any value to edit</sub>
    </div>
  );
};

export default Body;
