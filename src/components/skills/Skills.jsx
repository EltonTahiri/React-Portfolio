import React from "react";
import "./skills.css";
import { HiBadgeCheck } from "react-icons/hi";

const Skills = () => {
  return (
    <section id="skills">
      <h5>Coding Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <HiBadgeCheck />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <HiBadgeCheck />
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <HiBadgeCheck />
              <h4>JavaScript</h4>
              <small className="text-light">Being Developed</small>
            </article>

            <article className="experience__details">
              <HiBadgeCheck />
              <h4>React</h4>
              <small className="text-light">Being Developed</small>
            </article>
          </div>
        </div>

 {/* end of frontend*/}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <HiBadgeCheck />
              <h4>Java</h4>
              <small className="text-light">Basic</small>
            </article>

            <article className="experience__details">
              <HiBadgeCheck />
              <h4>.NET</h4>
              <small className="text-light">Basic</small>
            </article>

            <article className="experience__details">
              <HiBadgeCheck />
              <h4>MSSQL</h4>
              <small className="text-light">Basic</small>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
