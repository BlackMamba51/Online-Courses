import React from "react";
import Slider from 'react-slick';
import { teachersList } from "../../utils/teachers";
import SliderTeamPrev from "../UI/SliderTeamArrows/SliderTeamNext";
import SliderTeamNext from "../UI/SliderTeamArrows/SliderTeamPrev";

import HomepageTeamItem from "./HomepageTeamItem";

function HomepageTeamSlider() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SliderTeamNext/>,
    prevArrow: <SliderTeamPrev/>
  };

  return (
    <Slider {...settings}>
      {teachersList.map(teamMember => 
        <HomepageTeamItem teamMember={teamMember} key={teamMember.id}/>
      )}
    </Slider>
  )
}
export default HomepageTeamSlider;