import React from "react";
import HomepageCommentsSlider from "./HomepageCommentsSlider";
import HomepageTeamSlider from "./HomepageTeamSlider";


function HomepageTeam() {

  return(
    <div className="homepage-team">
      <div className="container">
        <div className="subtitle">Best tutors are all here</div>
        <div style={{marginBottom: 20}} className="title">Meet our team</div>
        <HomepageTeamSlider/>
        <div style={{textAlign: 'center', marginTop: 80}} className="subtitle">TESTIMONIALS</div>
        <div style={{textAlign: 'center'}} className="title">What our students say</div>
        <HomepageCommentsSlider/>
      </div>
    </div>
  )
}

export default HomepageTeam;