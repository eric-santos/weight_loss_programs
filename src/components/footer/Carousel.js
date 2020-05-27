import React from "react";
import { Carousel } from "react-responsive-carousel";

import "./Footer.css";

export default () => (
  <Carousel autoPlay>
    <div classname="carousel">
      <p>
        To date I have lost 14 Kilos (30 pounds) and my fitness level is at
        least the same as when I was actively <br />
        engaged in sport (if not better ), thanks to iFit and the range and
        variation of fitness programs available
      </p>
      <h6>Graham Lambourne</h6>
    </div>
    <div>
      <p>
        To date I have lost 14 Kilos (30 pounds) and my fitness level is at
        least the same as when I was actively <br />
        engaged in sport (if not better ), thanks to iFit and the range and
        variation of fitness programs available
      </p>
      <h6 className="legend">Graham Lambourne</h6>
    </div>
    <div>
      <p>
        To date I have lost 14 Kilos (30 pounds) and my fitness level is at
        least the same as when I was actively <br />
        engaged in sport (if not better ), thanks to iFit and the range and
        variation of fitness programs available
      </p>
      <h6 className="legend">Graham Lambourne</h6>
    </div>
  </Carousel>
);
