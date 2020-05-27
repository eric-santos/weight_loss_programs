import React from "react";
import "./MiddleContent.css";

import woman from "../../images/woman-girl-silhouette-jogger-40751.jpg";
import weights from "../../images/weight.jpg";
import barbell from "../../images/barbell.jpg";
import workout from "../../images/man-working-out-2294361.jpg";
import running from "../../images/people-wearing-running-shoes-2526878.jpg";
import twoWoman from "../../images/two-woman-doing-exercise-1671217.jpg";
import cityExcercise from "../../images/cityExcersice.jpg";
import earphones from "../../images/earphones.jpg";
import stretch from "../../images/stretch.jpg";
import woods from "../../images/woods.jpg";
import insideGym from "../../images/insideGym.jpg";
import colorful from "../../images/colorful.jpg";

const MiddleContent = () => {
  return (
    <section className="middle-content">
      <div className="title">
        <h2>Weight Loss</h2>
        <p>
          Welcome to the center of it all. The Fitness Shop presents you with
          hundreds of workout <br />
          programs designed to guide your weight loss journey
        </p>
      </div>

      <div className="boxes">
        <div className="box teal">
          <img src={woman} alt="woman" />
        </div>
        <div className="box gold">
          <img src={weights} alt="weights" />
        </div>
        <div className="box cadetblue">
          <img src={barbell} alt="barbell" />
        </div>
        <div className="box coral">
          <img src={workout} alt="workout" />
        </div>
        <div className="box crimson">
          <img src={running} alt="woman" />
        </div>
        <div className="box forestgreen">
          <img src={cityExcercise} alt="city excercise" />
        </div>
        <div className="box darkorchid">
          <img src={twoWoman} alt="woman" />
        </div>
        <div className="box hotpink">
          <img src={earphones} alt="woman with earphones" />
        </div>
        <div className="box indigo">
          <img src={colorful} alt="colorful weights" />
        </div>
        <div className="box dodgerblue">
          <img src={woods} alt="running in the woods" />
        </div>
        <div className="box indigo">
          <img src={stretch} alt="woman stretching" />
        </div>
        <div className="box dodgerblue">
          <img src={insideGym} alt="excercise inside gym" />
        </div>
      </div>
      <button>View More</button>
    </section>
  );
};

export default MiddleContent;
