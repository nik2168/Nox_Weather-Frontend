import { Visibility } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { changeTimeFormat } from "../../../Features/helper";
import "./PressureWidget.css";


const PressureWidget = ({ curData }) => {
  let sunriseUnix = new Date(curData?.sys?.sunrise * 1000);
  let sunsetUnix = new Date(curData?.sys?.sunset * 1000);
  let sunriseTime = changeTimeFormat(sunriseUnix);
  let sunsetTime = changeTimeFormat(sunsetUnix);
  return (
    <Box className="pressureWidget">
      <div className="pressureFirstHalf">
        <div className="windWidgetHeader">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="44px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M120-760v-80h120v80H120Zm125 213-57-56 85-85 57 56-85 85Zm235-93q-83 0-141.5-58.5T280-840h400q0 83-58.5 141.5T480-640Zm-40 160v-120h80v120h-80Zm275-67-84-85 56-56 85 84-57 57Zm5-213v-80h120v80H720ZM80-120v-80q38 0 56.5-20t77.5-20q59 0 77.5 20t54.5 20q38 0 56.5-20t77.5-20q57 0 77.5 20t56.5 20q38 0 55.5-20t76.5-20q59 0 77.5 20t56.5 20v80q-57 0-77.5-20T746-160q-36 0-54.5 20T614-120q-57 0-77.5-20T480-160q-38 0-56.5 20T346-120q-59 0-76.5-20T214-160q-38 0-56.5 20T80-120Zm0-160v-80q38 0 56.5-20t77.5-20q57 0 76.5 20t55.5 20q38 0 56.5-20t77.5-20q57 0 77 20t55 20q38 0 56.5-20t77.5-20q57 0 77.5 20t56.5 20v80q-59 0-78.5-20T746-320q-36 0-54.5 20T614-280q-57 0-77.5-20T480-320q-38 0-55.5 20T348-280q-59 0-78.5-20T214-320q-36 0-56.5 20T80-280Z" />
          </svg>{" "}
          <Typography sx={{ fontWeight: "300", fontSize: "0.9rem" }}>
            {sunriseTime}
          </Typography>
        </div>
        <div className="windWidgetHeader">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="44px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="m734-556-56-58 86-84 56 56-86 86ZM80-160v-80h800v80H80Zm360-520v-120h80v120h-80ZM226-558l-84-86 56-56 86 86-58 56Zm-26 238q0-117 81.5-198.5T480-600q117 0 198.5 81.5T760-320H200Z" />
          </svg>{" "}
          <Typography sx={{ fontWeight: "300", fontSize: "0.9rem" }}>
            {sunsetTime}
          </Typography>
        </div>
        <div className="windWidgetHeader">
          <Visibility />
          <Typography sx={{ fontWeight: "300", fontSize: "0.9rem" }}>
            {(curData?.visibility)/1000}KM
          </Typography>
        </div>
      </div>
      <div className="pressureSecondHalf">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="134px"
          viewBox="0 -960 960 960"
          width="134px"
          fill="yellow"
          className="SunPressure"
        >
          <path d="M440-800v-120h80v120h-80Zm0 760v-120h80v120h-80Zm360-400v-80h120v80H800Zm-760 0v-80h120v80H40Zm708-252-56-56 70-72 58 58-72 70ZM198-140l-58-58 72-70 56 56-70 72Zm564 0-70-72 56-56 72 70-58 58ZM212-692l-72-70 58-58 70 72-56 56Zm268 452q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Z" />
        </svg>
      </div>
    </Box>
  );
};

export default PressureWidget;
