import React from "react";
import "./contacts.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-form">
        <div className="contact-title">
          {" "}
          <span>Contact Us</span>
        </div>
        <div>
          {" "}
          <form>
            <div>
              {" "}
              <input type="text" placeholder="Type your Name" />
            </div>
            <div>
              {" "}
              <input type="email" placeholder="Type your Email Address" />
            </div>
            <div>
              {" "}
              <input type="text" placeholder="Type your Telephone Number" />
            </div>
            <div>
              {" "}
              <textarea />
            </div>
            <div className="btn-icon-sub">
              <button className="contact-submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="contact-details">
        <div className="contact-details-title">
          <span className="details-title">Physical Location</span>
        </div>

        <div className="details-contact">
          <span>AKIDAS Pharmaceuticals & Medical Supplies</span>
        </div>

        <div className="details-contact">
          <div className="contact-address">
            <div>
              <span>Address :</span>
            </div>
            <div>
              <div>
                {" "}
                <span>Nairobi, Kenya </span>
              </div>
              <div>
                {" "}
                <span>Mogadishu, Somalia </span>
              </div>
            </div>
          </div>
        </div>

        <div className="details-contact">
          <div className="phone-details">
            <div>
              {" "}
              <span>Our Telephone Details :</span>
            </div>
            <div>
              {" "}
              <span>+254 707064823 </span>{" "}
            </div>
          </div>
        </div>
        <div className="details-contact">
          <div className="email-details">
            <div>
              {" "}
              <span>Email : </span>
            </div>
            <div>
              {" "}
              <span>ismahan.adawe@gmail.com </span>
            </div>
          </div>
        </div>
        <div className="details-contact">
          <span></span>
        </div>
        <div className="social-handle">
        <a href="https://www.facebook.com/profile.php?id=100087974205941"> 
          <div className="icons-social">
            <div>
              <img src={process.env.PUBLIC_URL + "/assets/facebook.png"} className="icon-img" alt=""/>
            </div>
            <span>Facebook</span>
          </div>
          </a>
          <a href="https://www.instagram.com/ikadaskenya/">
          <div className="icons-social">
            <div>
              <img src={process.env.PUBLIC_URL + "/assets/instagram.png"} className="icon-img" alt=""/>
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
              <img src={process.env.PUBLIC_URL + "/assets/linked.pnd.png" }className="icon-img" alt="" />
            </div>
            <div>
              {" "}
              <span>LinkedIn</span>
            </div>
          </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
