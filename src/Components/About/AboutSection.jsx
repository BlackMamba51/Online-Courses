import React from "react";
import OrangeButton from "../UI/OrangeButton/OrangeButton";

function AboutSection() {

  return (
    <div className="homepage-about">
      <div className="container">
        <div className="about__body">
          <div className="about-img"></div>
          <div className="about-info">
            <h2 className="about-subtitle">Who we are</h2>
            <h2 className="about-title">Why Createx?</h2>
            <ul className="description-list">
              <li className="list-items">A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
              <li className="list-items">Vulputate placerat amet pulvinar lorem nisl.</li>
              <li className="list-items">Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>
              <li className="list-items">Etiam duis lobortis in fames ultrices commodo nibh.</li>
              <li className="list-items">Tincidunt sagittis neque sem ac eget.</li>
              <li className="list-items">Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</li>
            </ul>
            <div style={{width: '200px', marginTop: 50}}><OrangeButton>More about us</OrangeButton></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection;