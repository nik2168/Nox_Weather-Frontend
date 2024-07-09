import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import "./Widgets.css";
import React from "react";
import { Cloud } from "@mui/icons-material";
import WeeklyForecast from "./Weekly Forecast/WeeklyForecast";
import WindWidget from "./WindWidget/WindWidget";
import PressureWidget from "./Pressure Widget/PressureWidget";
import WeeklyForecastChart from "./Weekly Forecast Chart/WeeklyForecastChart";

const Widgets = ({curData}) => {

  return (
    <div className="widgetsContainer">
      <div className="miniWidgets">
        <WindWidget curData={curData} />
        <PressureWidget curData={curData} />
      </div>
      <div className="weeklyForecastChartContainer">
        <WeeklyForecastChart />
      </div>
      <div className="weeklyForecastContainer">
        <WeeklyForecast />
      </div>
    </div>
  );
};

export default Widgets;
