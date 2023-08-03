import React from "react";
import "./about.css";

const About = () => {
  return (
    <div>
      <div className="about-item">
        <div className="title-wahat">
          {" "}
          <span>Overview </span>
        </div>
        <div className="what-details">
          {" "}
          <p>
            {" "}
            AKIDAS is a pharmaceutical and medical equipment distribution
            company. The company has over 5 years of operational experience and
            an extensive understanding on health and medical needs. AKIDAS in
            uniquely positioned and committed to meeting the deficiency in the
            market to supply ethical, reliable, affordable and quality assured
            of all medicinal products and equipment's vital for healthcare
            service provision,
          </p>{" "}
        </div>
        <hr />
        <div>
          <div className="mgt-area">
            <div>
              <div className="mgt-item">
                {" "}
                <span className="mgt-title">Management</span>
              </div>

              <div className="mgt-founder">
                <span className="mgt-ceo"> CEO & Founder</span>
              </div>
              <div className="ceo-bio">
                {" "}
                <p>
                  Ms Ismahan Khalif Adawe, British citizen and Somali native. Ms
                  Adawe studied Master of Pharmacy at the prestigious University
                  of Bath in South West of England. Registered and licenced by
                  the Royal Pharmaceutical Society of Great Britain. Possesses
                  extensive professional and practical knowledge in the
                  pharmaceutical industry.
                </p>
              </div>
            </div>
            <div>
              <img src="./assets/ismahan.png" className="mgt-img" />
              <br />
              <span className="adawe-title"> Ismahan Adawe CEO & Founder</span>
            </div>
          </div>
          <hr />
          <div>
            <div className="partner-details">
              <span>Partners & Clients</span>
            </div>

            <div className="distributor">
              {" "}
              <p>
                {" "}
                Since the formation of AKIDAS, it secured an exclusive
                distributor contract with BI-MED a medical devices manufacturer
                based in Ankara Turkey.{" "}
              </p>{" "}
            </div>

            <div className="our-client-details">
              <p className="details-cleinet">
                We have established strong relationship with reputable medical
                service providers based in Mogadishu, Somalia and Nairobi,
                Kenya.
              </p>
              <div className="client-list">
                <div className="medi">
                  <div>
                    {" "}
                    <img src="/assets/medi-png.svg" className="client-img" />
                  </div>
                  <div>
                    {" "}
                    <span> MEDIPARK DIAGNOSTICS</span>
                  </div>
                </div>
                <div className="soma">
                  <div>
                    {" "}
                    <img src="/assets/somali.png" className="client-img" />
                  </div>
                  <div>
                    {" "}
                    <span> SOMALI SUDANESE HOSPITAL</span>
                  </div>
                </div>
                <div className="ameed">
                  <div>
                    {" "}
                    <img src="/assets/aamin.png" className="client-img" />
                  </div>

                  <div>
                    {" "}
                    <span>AMEEN MEDICAL EMERGENCY AMBULANCE SERVICES</span>
                  </div>
                </div>
              </div>
              <p>
                {" "}
                The ambition is grow our client base and extend our service
                across all the regions in countries where access to healthcare
                is further scarce.
              </p>
            </div>
          </div>
        </div>

        <hr />
        <div className="mission-vision">
          {" "}
          <span> Mission & Vision</span>
        </div>
        <div className="misssion-det">
          <div>
            <p>
              {" "}
              To establish reliable supply chain of all healthcare products
              required in Somalia.
            </p>
          </div>
          <div className="mission-tit">
            {" "}
            <span> Mission</span>
          </div>
          <div>
            <p>
              {" "}
              To lead the industry by supplying affordable, quality assured that
              meet global standards.
            </p>
          </div>

          <div className="values-tit">
            {" "}
            <span> Values</span>
          </div>
          <>
            <p>
              {" "}
              To introduce professionalism embedded with integrity, provide
              highest quality service. Prioritise saving lives through the
              supply of essential pharmaceutical products that are market
              competitive with assured and certified quality standard.
            </p>
          </>
        </div>
      </div>
    </div>
  );
};
export default About;
