import React from "react";
import { eventsList } from "../../utils/eventsList";
import HomepageEventItem from "../Homepage/HomepageEventItem";

function EventsVerticalList({ filteredEvents }) {

  return (
    <div className="vertical-list">
      {filteredEvents.map(events => <HomepageEventItem events={events} key={events.id}/>)}
    </div>
  )
}

export default EventsVerticalList;