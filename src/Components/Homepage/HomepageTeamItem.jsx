import React, { useState } from "react";

function HomepageTeamItem({teamMember}) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} className="member-card">
      <div className="member-img">
        <img src={teamMember.img} alt={teamMember.name}/>
      </div>
      <h2 className="member-name">{teamMember.name}</h2>
      <div className="member-position">{teamMember.position}</div>
      {isShown &&
        <div className="member-info">
          <div className="member-facebook member-icon"></div>
          <div className="member-instagram member-icon"></div>
          <div className="member-linkedin member-icon"></div>
        </div>
      }
    </div>
  )
}

export default HomepageTeamItem;