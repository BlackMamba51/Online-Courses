import React from "react";
import classes from './SliderCommentsArrows.module.css';
function SliderCommentsPrev(props) {
  const { style, onClick } = props;
  return (
    <div style={{...style}} className={classes.sliderPrev} onClick={onClick}></div>
  )
}

export default SliderCommentsPrev;