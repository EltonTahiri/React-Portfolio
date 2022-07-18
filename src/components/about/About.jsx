import React from "react";
import "./about.css";
import ME from "../../assets/aboutpic.jpg";
import { BsAward } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Learn more</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about__icon" />
              <h5>Experience </h5>
              <small>6+ months and being developed </small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients </h5>
              <small>Being Developed</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects </h5>
              <small> 5 + projects </small>
            </article>
          </div>

          <p>
            Highly motivated person who’s looking to gain as much knowledge and
            hands-on experience on Software Development. Ambitious and a team
            player with excellent communication skills.
          </p>

          <a href="#contact" className="btn btn-primary">
            Get in touch with Me!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
