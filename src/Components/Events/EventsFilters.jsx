import React from "react";
import CategoryFilters from "./CategoryFilters";
import SortFilters from "./SortFilters";

function EventsFilters({ filterByCategory, sortEvents, searchEvents }) {

  return (
    <div className="events-filters-container">
      <CategoryFilters filterByCategory={filterByCategory}/>
      <SortFilters defaultValue="sort" sortEvents={sortEvents} />
      <input onChange={(e) => searchEvents(e)} type="text" placeholder="Search event..." className="search-event"/>
    </div>
  )
}

export default EventsFilters;