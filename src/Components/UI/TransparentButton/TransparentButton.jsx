import React from "react";
import classes from './Transparent.module.css';
function TransparentButton({children, props}) {

  return (
    <button className={classes.transparentButton} {...props}>
      {children}
    </button>
  )
}

export default TransparentButton;