import { Box, Divider, Skeleton, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import "./WeeklyForecastChart.css";
import { useWeeklyForecastQuery } from "../../../redux/api/api";
import { useErrors } from "../../../Features/hooks";
import { renderDailyData, renderDailyTemp } from "../../../Features/renderWeeklyData";
import { LineChart } from "../../Chart/Charts";


const WeeklyForecastChart = () => {
  const { city } = useParams();

  // const baseUrl = "api.openweathermap.org/data/2.5/forecast";

  const { isLoading, isError, error, data, refetch } =
    useWeeklyForecastQuery(city);

  useErrors([{ isError, error }]);

  let list = [];

  let dailyData = new Map();

  let DataElements = [];

  let dailyTemp = [];

  if (!isLoading) {
    list = data?.list;
    list?.map((item) => {
      const dateTime = new Date(item.dt * 1000);
      const day = dateTime.getDate();
      const time = dateTime.getHours();
      dailyData[day] = { ...item, day, time };
    });
    DataElements = renderDailyData(dailyData); // will render all the weekly data in react components ...
    dailyTemp = renderDailyTemp(dailyData);
  }


  return isLoading ? (
    <Skeleton className="weeklyForecastChartBox" />
  ) : (
    <Box className="weeklyForecastChartBox">
      <div className="weeklyForecastChartHeader">
        <span></span>
        <Typography sx={{ fontWeight: "100", fontSize: "0.8rem" }}>
          Weekly Forecast Temperature Chart
        </Typography>
      </div>
      <Divider
        orientation="horizontal"
        variant="middle"
        flexItem
        sx={{ backgroundColor: "grey", height: "0.1px" }}
      />
      <div className="lineChatContainer">
      <LineChart value={dailyTemp} />
      </div>
    </Box>
  );
};

export default WeeklyForecastChart;
