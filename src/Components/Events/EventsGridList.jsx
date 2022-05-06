import React from "react";
import { eventsList } from "../../utils/eventsList";
import EventsGridItem from "./EventsGridItem";

function EventsGridList({ filteredEvents }) {

  return (
    <div className="grid-list">
      {filteredEvents.map(events => <EventsGridItem events={events} key={events.id}/>)}
    </div>
  )
}

export default EventsGridList;