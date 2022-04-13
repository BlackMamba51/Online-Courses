import React from "react";
import classes from './SliderCommentsArrows.module.css';
function SliderNextArrow(props) {
  const { onClick } = props;
  return (
    <div className={classes.sliderNext} onClick={onClick}></div>
  )
}

export default SliderNextArrow;