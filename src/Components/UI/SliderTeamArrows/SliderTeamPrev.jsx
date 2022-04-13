import React from "react";
import classes from './SliderTeamArrows.module.css';
function SliderTeamNext(props) {
  const { style, onClick } = props;
  return (
    <div style={{...style}} className={classes.sliderTeamNext} onClick={onClick}></div>
  )
}

export default SliderTeamNext;