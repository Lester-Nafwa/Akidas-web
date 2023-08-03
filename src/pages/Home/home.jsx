import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home-sect">
      <div className="scroll-img">
        <div className="gallery">
          <div>
            {" "}
            <img
              src="/assets/machinery.png"
              className="currosel-img"
              alt="Machinery"
            />
            <div>
              <span>Medical Machinery</span>
            </div>
          </div>
          <div>
            <img
              src="/assets/equioments.png"
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
              src="/assets/medicene.png"
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
      <br />
      <div className="home-elemets">
        <hr />
        <div className="item-home">
          <a href="/about" className="about-home">
            <span className="about-home-text">About Us</span>
          </a>
          <a href="/product" className="about-product">
            <span className="about-home-text">Our Products</span>
          </a>
        </div>
      </div>
      <footer className="footer">
        <p>Contact us at: </p>
        <div className="socia-handle">
          <div className="icons-social">
            <div>
              <img src="/assets/facebook.png" className="icon-img" />
            </div>
            <span>Facebook</span>
          </div>
          <div className="icons-social">
            <div>
              <img src="/assets/twittericon.png" className="icon-img" />
            </div>
            <div>
              {" "}
              <span>Twitter</span>
            </div>
          </div>
          <div className="icons-social">
            <div>
              <img src="/assets/youtubeicon.png" className="icon-img" />
            </div>
            <div>
              {" "}
              <span>Youtube</span>
            </div>
          </div>
        </div>
        <div className="contact-list">
          <div>
            <span>Telephone Number :</span>
            <span>+254 707064823</span>
          </div>
          <br />
          <div>
            <span>Email :</span>
            <span>ismahan.adawe@gmail.com</span>
          </div>
          <br />
          <div className="locate-ico">
            <div>
              {" "}
              <span>Location :</span>
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
      </footer>
    </div>
  );
};

export default Home;