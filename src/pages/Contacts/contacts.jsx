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
      </div>
    </div>
  );
};
export default Contact;
