import React from "react";
import "./MiddleContent.css";
import woman from "../../images/woman-girl-silhouette-jogger-40751.jpg";
import weights from "../../images/weight.jpg";

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
          <img src={woman} alt="woman" />
        </div>
        <div className="box coral">
          <img src={weights} alt="weights" />
        </div>
        <div className="box crimson">
          <img src={woman} alt="woman" />
        </div>
        <div className="box forestgreen">
          <img src={weights} alt="weights" />
        </div>
        <div className="box darkorchid">
          <img src={woman} alt="woman" />
        </div>
        <div className="box hotpink">
          <img src={weights} alt="weights" />
        </div>
        <div className="box indigo">
          <img src={woman} alt="woman" />
        </div>
        <div className="box dodgerblue">
          <img src={weights} alt="weights" />
        </div>
        <div className="box indigo">
          <img src={woman} alt="woman" />
        </div>
        <div className="box dodgerblue">
          <img src={weights} alt="weights" />
        </div>
      </div>
      <button>View More</button>
    </section>
  );
};

export default MiddleContent;
