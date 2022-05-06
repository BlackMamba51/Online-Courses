import React, { useMemo, useState } from "react";
import { eventsList } from "../../utils/eventsList";
import Navbar from "../Navbar/Navbar";
import EventsFilters from "./EventsFilters";
import EventsGridList from "./EventsGridList";
import EventsVerticalList from "./EventsVerticalList";

function EventsHeader() {
  const [isGrid, setIsGrid] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState(eventsList);

  function filterByCategory(e) {
    let arrayForEvents = [];
    eventsList.map(event => {
      if(event.type === e.target.value) {
        arrayForEvents.push(event);
      }
    });
    setFilteredEvents(arrayForEvents);
    if(e.target.value === 'All themes') {
      setFilteredEvents(eventsList);
    }
  }

  function sortEvents(e) {
    if(e.target.value === 'newest') {
      return setFilteredEvents([...filteredEvents].sort((a, b) => b.fullDate - a.fullDate));
    } else if(e.target.value === 'oldest') {
      return setFilteredEvents([...filteredEvents].sort((a, b) => a.fullDate - b.fullDate));
    }
  };
  
  function searchEvents(e) {
    let searchArray = [];
    eventsList.map(event => {
      if ((event.title).toLowerCase().includes(e.target.value.toLowerCase())) {
        searchArray.push(event);
      } else if(e.target.value === '') {
        setFilteredEvents(eventsList);
      }
    setFilteredEvents(searchArray);
    });
  }

  return (
    <div className="events-header">
      <Navbar/>
      <div className="container">
        <div className="events-header__body">
          <div className="subtitle">Our events</div>
          <div className="title">Lectures, workshops & master-classes</div>
          <div className="events-filters">
            <EventsFilters searchEvents={searchEvents} sortEvents={sortEvents} filterByCategory={filterByCategory}/>
            <div className="change-listview">
              <div onClick={() => setIsGrid(false)} className="list-button list-buttons"></div>
              <div onClick={() => setIsGrid(true)} className="grid-button list-buttons"></div>
            </div>
          </div>
          {isGrid
          ? <EventsGridList filteredEvents={filteredEvents}/>
          : <EventsVerticalList filteredEvents={filteredEvents}/>
          }
          <div className="events-pagination">
            <button style={{color: '#FF3F3A'}} className="events-pages">1</button>
            <button className="events-pages">2</button>
            <button className="events-pages">3</button>
            <button className="events-pages">4</button>
            <div className="right-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsHeader;