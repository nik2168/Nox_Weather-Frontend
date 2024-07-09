import React from "react";
import MoonSvg from "../../assets/SvgComponents/MoonSvg";
import { Cloud } from "@mui/icons-material";
import { Box } from "@mui/material";
import './WeatherWidget.css'

const WeatherWidget = () => {
  return (
    <div sx={{ backgroundColor: "white" }} className="weather-widget">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#e8eaed"
        className="moon"
      >
        <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z" />
      </svg>{" "}
      <div className="cloudContainer">
        <Cloud sx={{width: "80px", height: "80px", fill: "lightblue",     filter: "drop-shadow(0 0 20px rgba(173, 216, 230, 0.8))"
}} className="cloud" />
      </div>
      <div className="temperature">19C</div>
      <div className="weather">Slightly Cloudy</div>
      <div className="low-high">13 C - 25 C</div>
      <div className="location">Tokyo</div>
      <div className="humidity">moderate</div>
    </div>
  );
};

export default WeatherWidget;
