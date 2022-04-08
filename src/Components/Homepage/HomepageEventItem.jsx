import React from "react";

import TransparentButton from "../UI/TransparentButton/TransparentButton";

function HomepageEventItem({events}) {

  return (
    <div className="event-card">
      <div className="event-card__body">
        <div className="event-day">{events.date}</div>
        <div className="column-group">
          <div className="event-month">{events.month}</div>
          <div className="event-time">{events.time}</div>
        </div>
        <div className="column-group">
          <div className="event-name">{events.title}</div>
          <div className="event-type">{events.type}</div>
        </div>
        <TransparentButton>View more</TransparentButton>
      </div>
    </div>
  )
}

export default HomepageEventItem