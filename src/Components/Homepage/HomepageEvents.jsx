import React from "react";
import OrangeButton from "../UI/OrangeButton/OrangeButton";
import HomepageEventsList from "./HomepageEventsList";

function HomepageEvents() {

  return (
    <div className="homepage-events">
      <div className="container">
        <div className="homepage-events__body">
          <h2 style={{textAlign: 'center'}} className="subtitle">Our Events</h2>
          <h2 style={{textAlign: 'center'}} className="title">Lectures {'&'} workshops</h2>
          <HomepageEventsList/>
          <div style={{justifyContent: 'center', marginTop: 50}} className="flex-group">
            <div className="more">Do you want more?</div>
            <OrangeButton>Explore all events</OrangeButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomepageEvents;