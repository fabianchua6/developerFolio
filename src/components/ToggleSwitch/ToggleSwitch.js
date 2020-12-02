import React, {useState, useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.css";
const ToggleSwitch = () => {
  const [isChecked, setChecked] = useState(false);
  const styleContext = useContext(StyleContext);

  return (
    <div class="toggleWrapper">
      <input type="checkbox" class="dn" id="dn" checked={isChecked} onChange={() => {
          styleContext.changeTheme();
          setChecked(!isChecked);
        }}/>
    <label for="dn" class="toggle">

      <span class="toggle__handler">
        <span class="crater crater--1"></span>
        <span class="crater crater--2"></span>
        <span class="crater crater--3"></span>
      </span>
      <span class="star star--1"></span>
      <span class="star star--2"></span>
      <span class="star star--3"></span>
      <span class="star star--4"></span>
      <span class="star star--5"></span>
      <span class="star star--6"></span>
    </label>
  </div>);
};
export default ToggleSwitch;
