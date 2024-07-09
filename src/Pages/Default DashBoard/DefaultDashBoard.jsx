import React from "react";
import WeatherWidget from "../../Components/WeatherWidget/WeatherWidget";
import "./DefaultDashBoard.css";
import { Container, Paper, Stack, Typography, styled } from "@mui/material";
import DashBoardBackground from "../../Components/DashBoardBackground/DashBoardBackground";
import Widgets from "../../Components/Widgets/Widgets";
import AppLayout from "../../Components/AppLayout/AppLayout";


const DefaultDashBoard = () => {
  return (
    <>
      <div className="defaultDashboard">
        <DashBoardBackground />
      </div>
    </>
  );
};

export default AppLayout()(DefaultDashBoard);
