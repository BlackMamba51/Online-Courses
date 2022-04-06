import React from "react";
import classes from './OrangeButton.module.css';
function OrangeButton({children, props}) {

  return (
    <button className={classes.orangeButton} {...props}>
      {children}
    </button>
  )
}

export default OrangeButton;