import React from "react";
import { eventsList } from "../../utils/eventsList";
import HomepageEventItem from "./HomepageEventItem";

function HomepageEventsList() {

  return (
    <div>
      {eventsList.filter(item => item.id < 4).map(events => <HomepageEventItem events={events} key={events.id}/>)}
    </div>
  )
}

export default HomepageEventsList;