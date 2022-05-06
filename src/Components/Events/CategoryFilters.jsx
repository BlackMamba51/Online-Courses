import React from "react";

function CategoryFilters({ filterByCategory }) {
  
  return (
    <div className="filter-group">
      <div className="filter-name">Event category</div>
      <select onChange={(event) => filterByCategory(event)} className="select-category select-filter" name="category" id="">
        <option value="All themes">All themes</option>  
        <option value="Online master-class">Master class</option>  
        <option value="Online lecture">Online lecture</option>  
        <option value="Online workshop">Online workshop</option>  
      </select>        
    </div>
  )
}

export default CategoryFilters;