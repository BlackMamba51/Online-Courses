import React from "react";
import Navbar from '../Navbar/Navbar';
import OrangeButton from "../UI/OrangeButton/OrangeButton";
import TransparentButton from "../UI/TransparentButton/TransparentButton";
function AboutHeader() {

  return (
    <div className="homepage">
      <Navbar/>
      <div className="container">
        <div className="homepage__body">
          <div className="homepage-first-group">
            <div className="play-video">
              <div className="play-btn"></div>
              <h2 className="video-title">Play showreel</h2>
            </div>
            <div className="homepage-title">Enjoy studying with Createx Online Courses</div>
            <div className="homepage-btns">
              <TransparentButton>About Us</TransparentButton>
              <OrangeButton>Explore courses</OrangeButton>
            </div>
          </div>
          <div className="homepage-second-group">
            <div className="homepage-img"></div>
          </div>
        </div>
        <div className="homepage-statistics">
          <div className="statistic">
            <div className="statistic-cout">1200</div>
            <div className="statistic-title">Students graduated</div>
          </div>
          <div className="orange-circle"></div>
          <div className="statistic">
            <div className="statistic-cout">84</div>
            <div className="statistic-title">Completed courses</div>
          </div>
          <div className="orange-circle"></div>
          <div className="statistic">
            <div className="statistic-cout">16</div>
            <div className="statistic-title">Qualified tutors</div>
          </div>
          <div className="orange-circle"></div>
          <div className="statistic">
            <div className="statistic-cout">5</div>
            <div className="statistic-title">Years of experience</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHeader;