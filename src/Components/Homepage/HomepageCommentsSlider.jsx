import React from 'react';
import Slider from 'react-slick';
import { commentsList } from '../../utils/comments';
import SliderCommentsPrev from '../UI/SliderCommentsArrows/SliderCommentsPrev';
import SliderNextArrow from '../UI/SliderCommentsArrows/SliderNextArrow';

import HomepageCommentItem from './HomepageCommentItem';
function HomepageCommentsSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderNextArrow/>,
    prevArrow: <SliderCommentsPrev/>
  };
  return (
    <Slider {...settings}>
      {commentsList.map(comment => <HomepageCommentItem comment={comment}/>)}
    </Slider>
  )
}

export default HomepageCommentsSlider;