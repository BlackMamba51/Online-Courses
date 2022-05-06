import React from "react";
import TransparentButton from "../UI/TransparentButton/TransparentButton";

function EventsGridItem({ events }) {

  return (
    <div className="grid-event-card">
      <div className="grid-event-day">{events.date} {events.month}</div>
      <div className="grid-event-time">{events.time}</div>
      <div className="grid-event-text">{events.title}</div>
      <div className="grid-event-type">{events.type}</div>
      <TransparentButton>View more</TransparentButton>
    </div>
  )
}

export default EventsGridItem;