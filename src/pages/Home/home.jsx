import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-sect">
      <div className="scroll-img">
        <div className="gallery">
          <div>
            {" "}
            <img
              src={process.env.PUBLIC_URL + "/assets/machinery.png"}
              className="currosel-img"
              alt="Machinery"
            />
            <div>
              <span>Medical Machinery</span>
            </div>
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/assets/equioments.png"}
              className="currosel-img"
              alt="Equipments"
            />

            <div>
              {" "}
              <span>Medical Equipments</span>
            </div>
          </div>
          <div>
            {" "}
            <img
              src={process.env.PUBLIC_URL + "/assets/medicene.png"}
              className="currosel-img"
              alt="Med"
            />
            <div>
              {" "}
              <span>Pharmaceuticals</span>
            </div>
          </div>
        </div>
      </div>

      <div className="home-elemets">
        <hr />
        <div className="item-home">
          <Link to="/about" className="about-home">
            <span className="about-home-text">About </span>
          </Link>
          <Link to="/product" className="about-product">
            <span className="about-home-text">Our Products</span>
          </Link>
        </div>
      </div>
      <footer className="footer">
        <div className="details-contacts">
          <div className="img-banner"><img src="/assets/contactus.png" alt="" className="banner-contact" /></div>
          <div  >
            <div  className="socia-handle" >
            <a href="https://www.facebook.com/profile.php?id=100087974205941">
              <div className="icons-social">
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "/assets/facebook.png"}
                    className="icon-img"
                    alt=""
                  />
                </div>
                <span>Facebook</span>
              </div>
            </a>

            <a href="https://www.instagram.com/ikadaskenya/">
              <div className="icons-social">
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "/assets/instagram.png"}
                    className="icon-img"
                    alt=""
                  />
                </div>
                <div>
                  {" "}
                  <span>Instagram</span>
                </div>
              </div>
            </a>
            <a href="https://www.linkedin.com/company/ikadas/">
              <div className="icons-social">
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "/assets/linked.pnd.png"}
                    className="icon-img"
                    alt=""
                  />
                </div>
                <div>
                  {" "}
                  <span>LinkedIn</span>
                </div>
              </div>
            </a>
            </div>
            <div className="contact-list">
              <div className="iconics">
                <div>  <img src='/assets/telephon-icon.svg' alt="" className="contact-icon" /> </div>
                <div>  <span>+254 707064823</span></div>
              </div>
              <br />
              <div className="iconics">
                <div> <img src='/assets/email-icon.svg' alt="" className="contact-icon" /> </div>
                <div>  <span>ismahan.adawe@gmail.com</span></div>
              </div>
              <br />
              <div className="locate-ico">
                <div>
                  {" "}
                  <img src='/assets/location.svg' alt="" className="contact-icon" />
                </div>
                <div>
                  <div>
                    {" "}
                    <span>Nairobi, Kenya</span>
                  </div>{" "}
                  <br />
                  <div>
                    {" "}
                    <span>Mogadishu, Somalia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
