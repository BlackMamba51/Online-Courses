import React from "react";
import classes from './SliderTeamArrows.module.css';
function SliderTeamPrev(props) {
  const { style, onClick } = props;
  return (
    <div style={{...style}} className={classes.sliderTeamPrev} onClick={onClick}></div>
  )
}

export default SliderTeamPrev;