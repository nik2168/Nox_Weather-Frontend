import React from "react";
import "./WindWidget.css";
import { Box, Typography } from "@mui/material";
import { Widgets, Air, WaterDrop, Directions } from "@mui/icons-material";

const WindWidget = ({curData}) => {

  

  return (
    <Box className="windWidgetBox">
      <div className="windWidgetHeader">
        <Air sx={{ color: "whitesmoke", fontSize: "2.3rem", color: "skyblue" }} />
        <Typography  sx={{ fontWeight: "600", fontSize: "1.3rem" }}>
          Wind
        </Typography>
      </div>
      <Typography
        variant="h4"
        sx={{ fontWeight: "600", paddingBottom: "2rem", textAlign: "center" }}
      >
        {Math.trunc(curData?.wind?.speed)} KM/H
      </Typography>
      <div className="windWidgetHeader">
        <Directions sx={{ color: "whitesmoke" }} />
        <Typography sx={{ fontWeight: "300", fontSize: "1rem" }}>
          Degree : {curData?.wind?.deg}°
        </Typography>
      </div>
      <div className="windWidgetHeader">
        <WaterDrop sx={{ color: "whitesmoke" }} />
        <Typography sx={{ fontWeight: "300", fontSize: "1rem" }}>
          Precipitation : {curData?.main?.humidity}
        </Typography>
      </div>
    </Box>
  );
};

export default WindWidget;
