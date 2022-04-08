import React from "react";

function HomepageBenefitItem({benefit, changeTextAndName}) {
  
  return (
    <button  style={{backgroundImage: `url(${benefit.img})`}} value={benefit.id} className={benefit.class} onClick={(e) => changeTextAndName(benefit.body, benefit.name, e)}>{benefit.name}</button>
  )
}

export default HomepageBenefitItem;