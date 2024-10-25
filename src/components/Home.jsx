import React from "react";
import "./design/Home.css";

export const Home = () => {
  return (
    <>
      <div className="home-container">
        <video
          className="background-video"
          src="./images/video1.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="about-content">
          <h2>About MPL</h2>
          <p>
            बंजारा समाजाची एक अप्रतिम अशी क्रिकेट स्पर्धा जळगाव शहरामध्ये यंदा
            आयोजित करण्यात येत आहे बंजारा युवा प्रीमिअर लीग स्पर्धेचे हे पहिले
            वर्ष आहे.हा केवळ क्रिकेट चा महोत्सव किंवा निव्वळ क्रिकेट स्पर्धा
            नसून हा समाजाला एकत्र आणण्याचा उपक्रम आहे. आपल्यामध्ये व आपल्या
            समाजातील युवा वर्गामध्ये बंधुत्वाची व एकात्मतेची भावना जोपासली गेली
            पाहिजे. अशा उपक्रमातून आपल्या समाजातील सर्व स्तरावरील युवा खेळाडूंना
            एक नवीन प्लॅटफॉर्म उपलब्ध करून देण्यास आयोजक हे नेहमी कटीबद्ध असतील.
            तरी सर्वांनी मोठ्या प्रमाणात व उत्स्फूर्तपणे या क्रिकेटच्या
            महोत्सवात,स्पर्धेत सहभागी होऊन आपल्या समाजाची एकता सर्वांना दाखवून
            द्या
          </p>
          <button>Learn More</button>
        </div>
        <div className="about-img">
          <img src="./images/trophy.jpg" alt="About Image" />
        </div>
      </div>
    </>
  );
};
