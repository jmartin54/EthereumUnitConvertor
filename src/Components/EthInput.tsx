import { useState, useCallback } from "react";
import { Unit } from "../Models/Unit";
import "../Styles/EthInput.css";

type EthInputProps = {
  wei: number | undefined;
  unit: Unit;
  unitMultiple: number;
  onChange: (wei: number) => void;
};
const EthInput = ({ wei, unit, unitMultiple, onChange }: EthInputProps) => {
  // computed properties
  const defaultValue = wei ? wei / unitMultiple : "0";

  // state
  const [editing, setEditing] = useState(false);

  // event handlers
  const handleBlur = useCallback((e) => {
    const value = 1 * e.target.value;
    const wei = value * unitMultiple;
    // Eth doesn't support fractional wei, because amounts are ints
    const changeValue = Math.floor(wei);
    onChange(changeValue);
    setEditing(false);
  }, []);
  const handleKeyPress = useCallback((e) => {
    if (e.key === "Enter") handleBlur(e);
  }, []);

  // display—show
  if (!editing)
    return (
      <div className="ethInput">
        <h1 onClick={() => setEditing(true)}>
          {defaultValue}
          <span className="unit">{unit}</span>
        </h1>
      </div>
    );

  // display—edit
  return (
    <div className="ethInput">
      <div className="inputContainer">
        <input
          type="number"
          defaultValue={defaultValue}
          placeholder={`${String(unit)} value`}
          autoFocus={true}
          onFocus={(e) => e.target.select()}
          onKeyPress={handleKeyPress}
          onBlur={handleBlur}
        />
        <span className="unit">editing {unit}</span>
      </div>
    </div>
  );
};

export default EthInput;
