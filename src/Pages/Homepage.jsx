import React from "react";
import '../Components/Homepage/homepage.css';
import HomepageHeader from "../Components/Homepage/HomepageHeader";
import AboutSection from "../Components/Homepage/AboutSection";
import HomepageCourses from "../Components/Homepage/HomepageCourses";
import HomepageBenefits from "../Components/Homepage/HomepageBenefits";
import HomepageEvents from "../Components/Homepage/HomepageEvents";
import HomepageCertificate from "../Components/Homepage/HomepageCertificate";
import HomepageTeam from "../Components/Homepage/HomepageTeam";
function Homepage() {

  return (
    <div>
      <HomepageHeader/>
      <AboutSection/>
      <HomepageCourses/>
      <HomepageBenefits/>
      <HomepageEvents/>
      <HomepageCertificate/>
      <HomepageTeam/>
    </div>
  )
}

export default Homepage;