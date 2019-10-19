import React from "react";

// import burgerImage from "../../../../assets/images/burger-logo.png";
import classes from "./ToggleButton.module.css";

const toggleButton = props => {
  return (
    // <button className={classes.ToggleButton} onClick={props.clicked}>
    //   <img src={burgerImage} alt="" />
    // </button>
    <div onClick={props.clicked} className={classes.DrawerToggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default toggleButton;
