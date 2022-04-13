import React from "react";
import OrangeButton from "../UI/OrangeButton/OrangeButton";

function HomepageSubscribe() {

  return (
    <div className="homepage-subscribe">
      <div className="container">
        <div className="homepage-subscribe__body">
          <div className="subtitle">Don’t miss anything</div>
          <div className="title">Subscribe to the Createx School announcements</div>
          <div style={{justifyContent: 'center', marginTop: 40}} className="flex-group">
            <input className="subscribe-input" type="text" placeholder="Your working email"/>
            <OrangeButton>Subscribe</OrangeButton>
          </div>
        </div>
      </div>
      <div style={{bottom: 0, left: 0}} className="subscribe-illustration"></div>
      <div style={{bottom: 0, right: 0}} className="subscribe-illustration"></div>
    </div>
  )
}

export default HomepageSubscribe;