import React from "react";
import "./DashBoardBackground.css"
import { Cloud } from "@mui/icons-material";

const DashBoardBackground = () => {
  return (
    <>
      <div className="backgroundImgContainer">
        <div className="appCloudContainer">
          <Cloud
            sx={{
              width: "130px",
              height: "130px",
              fill: "grey",
              filter: "drop-shadow(0 0 20px rgba(1, 6, 0, 0.8))",
            }}
            className="appCloud"
          />
        </div>
      </div>
      <div className="backgroundHouse"></div>
    </>
  );
};

export default DashBoardBackground;
