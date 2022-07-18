import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/alarmclock.PNG";
import IMG2 from "../../assets/counter.PNG";
import IMG3 from "../../assets/JsCalc.PNG";
import IMG4 from "../../assets/Quiz.PNG";
import IMG5 from "../../assets/Quote.PNG";
import IMG6 from "../../assets/Rent.PNG";

const dataArray = [
  {
    id: 1,
    image: IMG1,
    title: " JavaScript Alarm Clock ",
    github: "https://github.com/EltonTahiri/Alarm-Clock",
  },
  {
    id: 2,
    image: IMG2,
    title: " JavaScript Counter ",
    github: "https://github.com/EltonTahiri/Simple-JS-Counter",
  },
  {
    id: 3,
    image: IMG3,
    title: " JavaScript Calculator ",
    github: "https://github.com/EltonTahiri/JS-Calculator",
  },
  {
    id: 4,
    image: IMG4,
    title: "JavaScript Quiz",
    github: "https://github.com/EltonTahiri/Quiz-App",
  },
  {
    id: 5,
    image: IMG5,
    title: " JavaScript Quote Generator ",
    github: "https://github.com/EltonTahiri/Random-Quote-Generator-JS",
  },
  {
    id: 6,
    image: IMG6,
    title: "Rent A Car website Front-End",
    github: "https://github.com/EltonTahiri/RentACar",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {dataArray.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <a href={github} className="btn" target="_blank">
                Github
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
