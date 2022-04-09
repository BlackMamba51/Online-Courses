import React from "react";
import certificate from '../../assets/img/certificate.jpg'
function HomepageCertificate() {

  return (
    <div className="homepage-certificate">
      <div className="container">
        <div className="homepage-certificate__body">
          <div className="certificate-description">
            <div className="subtitle">Createx Certificate</div>
            <div className="title">Your expertise will be confirmed</div>
            <div className="certificate-text">We are accredited by international professional organizations and institutes:</div>
            <div className="certificate-logos">
              <div className="logos1 logos"></div>
              <div className="logos2 logos"></div>
              <div className="logos3 logos"></div>
            </div>
          </div>
          <div className="certificate-img">
            <img src={certificate} alt="certificate" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomepageCertificate;