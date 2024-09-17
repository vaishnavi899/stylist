import React from 'react';
import '../styles/WebPage.css'; // Import your custom CSS
import Header from './Header.js'; // Import the Header component

const WebPage = () => {
  return (
    <div className="webpage">
      <Header />
      <section className="hero">
        <div className="hero">
          <div className="hero-image"></div> {/* This div will handle the background image */}
          <div className="hero-video">
            <video 
              className="hover-video" // Add a class to target the hover effect
              width="800" 
              height="auto"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={process.env.PUBLIC_URL + '/mixkit-hand-selecting-through-clothes-23327-hd-ready.mp4'} type="video/mp4" />
            </video>
            
          </div>
        </div>
      </section>
      <div className="button-container">
      <button className="button">Get Outfitted</button>

      </div>
      {/* Image and Video Section */}
      <section className="media-section">
        {/* Left Image */}

        <div className="image-container">
        <img src={process.env.PUBLIC_URL + '/image123.png'} alt="Fashion Outfit" className="fashion-image" />
          <img src={process.env.PUBLIC_URL + '/image.png'} alt="Fashion Outfit" className="fashion-image" />
        </div>

        {/* Right Video */}
        <div className="video-container">
        <video 
              className="hover-video" // Add a class to target the hover effect
              width="800" 
              height="auto"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={process.env.PUBLIC_URL + '/steps-video-optimized.mp4'} type="video/mp4" />
            </video>
            
        </div>
      </section>
       
      
    </div>
  );
};

export default WebPage;
