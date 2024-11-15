import React from "react";
import aboutImage1 from "./images/about1.jpeg";
import aboutImage2 from "./images/about2.jpg";
// import harshalPic from "./images/harshal.jpg";
// import tejasPic from "./images/tejas.jpg";
// import anandPic from "./images/anand.jpg";
// import sushantPic from "./images/sushant.jpg";
const dummyphoto =
  "data:image/jpeg;base64,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";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <h1 className="about-title">About Us</h1>

      <div className="about-container">
        <div className="about-content">
          <p>
            Welcome to <strong>Eventify</strong>, where we turn your dreams into
            unforgettable moments! We specialize in creating magical events that
            leave lasting memories. From grand weddings to corporate events and
            birthdays, we bring your vision to life.
          </p>
          <p>
            Our team of creative designers and expert planners ensures that
            every detail is perfect, so you can enjoy a seamless, stress-free
            experience.
          </p>
          <p>
            <strong>Let’s craft something extraordinary together!</strong>
          </p>
        </div>

        <div className="about-images">
          <img src={aboutImage1} alt="Event planning" className="about-image" />
          <img src={aboutImage2} alt="Celebration" className="about-image" />
        </div>
      </div>

      {/* Team Profile Section */}
      <div className="team-section">
        <h2 className="team-title">Meet Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img
              src={dummyphoto}
              alt="Harshal Chavan"
              className="profile-image"
            />
            <h3>Harshal Chavan</h3>
            <p className="member-role">Front-End Developer</p>
            <p>
              Harshal is a passionate frontend developer who loves crafting
              user-friendly interfaces. He specializes in React and ensures a
              seamless and interactive experience for users.
            </p>
          </div>
          <div className="team-member">
            <img
              src={dummyphoto}
              alt="Tejas Billava"
              className="profile-image"
            />
            <h3>Tejas Billava</h3>
            <p className="member-role">Backend Developer</p>
            <p>
              Tejas is a backend wizard who focuses on creating robust,
              scalable, and secure server-side logic using Node.js and Express.
              He ensures the backbone of the application is strong.
            </p>
          </div>
          <div className="team-member">
            <img src={dummyphoto} alt="Anand Shah" className="profile-image" />
            <h3>Anand Shah</h3>
            <p className="member-role">Front-End Developer</p>
            <p>
              Anand is an expert in turning designs into reality using HTML,
              CSS, and JavaScript. He ensures that the visual aspects of our
              platform are engaging and responsive.
            </p>
          </div>
          <div className="team-member">
            <img
              src={dummyphoto}
              alt="Sushant Bodade"
              className="profile-image"
            />
            <h3>Sushant Bodade</h3>
            <p className="member-role">Backend Developer</p>
            <p>
              Sushant excels in managing databases and API integration. With
              expertise in MongoDB and SQL, he ensures smooth data flow and
              efficient backend operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
