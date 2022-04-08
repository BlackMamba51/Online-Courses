import React, { useState } from "react";
import { benefistList } from "../../utils/benefits";
import HomepageBenefitItem from "./HomepageBenefitItem";

function HomepageBenefits() {
  const [benefitText, setBefitText] = useState(benefistList[0].body);
  const [benefitName, setBefitName] = useState(benefistList[0].name);

  const changeTextAndName = (text, name, e) => {
    setBefitText(text);
    setBefitName(name);
    benefistList.map(benefit => {
      benefit.class = 'benefit-btn';
      if (benefit.id === e.target.value) {
        benefit.class += ' active-btn';
      }
    })
  }
 
  return (
    <div className="homepage-benefits">
      <div className="container">
        <div className="homepage-benefits__body">
          <div style={{textAlign: 'center'}} className="subtitle">Our benefits</div>
          <div style={{textAlign: 'center'}} className="title">That’s how we do it</div>
          <div className="benefits-buttons">
            {benefistList.map(benefit => 
              <HomepageBenefitItem key={benefit.id} changeTextAndName={changeTextAndName} benefit={benefit}/>
            )}
          </div>
          <div className="flex-group">
            <div className="benefit-description">
              <div className="benefit-title">{benefitName}</div>
              <div className="benefit-body">{benefitText}</div>
            </div>
            <div className="benefit-img"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomepageBenefits;