import React from "react";

function SortFilters({ sortEvents, defaultValue }) {

  return (
    <div className="filter-group">
      <div className="filter-name">Sort by</div>
      <select onChange={(e) => sortEvents(e)} name="sort" id="" className="select-filter">
        <option disabled value="">{defaultValue}</option>
        <option value="newest">newest</option>
        <option value="oldest">oldest</option>
      </select>
    </div>
  )
}

export default SortFilters;