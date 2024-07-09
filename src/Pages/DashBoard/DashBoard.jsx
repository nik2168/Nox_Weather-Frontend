import { Box, Container, Skeleton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppLayout from "../../Components/AppLayout/AppLayout";
import DashBoardBackground from "../../Components/DashBoardBackground/DashBoardBackground";
import Widgets from "../../Components/Widgets/Widgets";
import { useErrors } from "../../Features/hooks";
import { useCurWeatherQuery, useLazyAddRemoveCitiesQuery } from "../../redux/api/api";
import { ArrowBackIosNew } from "@mui/icons-material";
import "./DashBoard.css";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { userExists } from "../../redux/reducer/authslice";

const DashBoard = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const { city } = useParams();




  const { isLoading, isError, error, data, refetch } = useCurWeatherQuery(city);

  useErrors([{ isError, error }]);

  let buttonType = "";
  if (user?.cities?.includes(city.toString().toLocaleLowerCase())) {
    buttonType = "Remove";
  } else {
    buttonType = "Add";
  }

  let curWeather = data?.weather;
  let weather = "";
  if (curWeather) {
    weather = curWeather[0]?.main;
  }

    const [useAddRemoveCities] = useLazyAddRemoveCitiesQuery();


    

  const citiesHandler = async (e)  => {
    console.log(`city ${e.currentTarget.value}`)
 try {
      const res = await useAddRemoveCities(city);
      if (res?.data?.success) toast.success(res?.data?.message);
      else toast.error(res?.error?.message);
    } catch (err) {
      toast.error(err?.response?.data?.message || "Something went wrong");
    } finally {

    }
  }

  return isLoading ? (
    <Skeleton className="dashboard" />
  ) : (
    <>
      <div className="dashboard">
        <DashBoardBackground />
        <Box sx={{ height: "5rem", width: "100%" }} className="dashboardHeader">
          <ArrowBackIosNew
            sx={{ fontSize: "2.3rem" }}
            className="ArrowBackIos"
            onClick={() => navigate("/")}
          />
          <button onClick={(e) => citiesHandler(e)} value={buttonType}>
            {buttonType}
          </button>
        </Box>
        <Container sx={{ height: "38rem", width: "100%", paddingTop: "3rem" }}>
          <Stack
            width={"100%"}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              textAlign={"center"}
              sx={{ fontWeight: "300", fontSize: "2.3rem" }}
            >
              {data?.name}
            </Typography>
            <Typography
              variant="h2"
              textAlign={"center"}
              sx={{ fontSize: "7rem" }}
            >
              {Math.trunc(data?.main?.temp - 273.15)}°
            </Typography>
            <Typography
              textAlign={"center"}
              sx={{ color: "lightgrey", fontSize: "1rem", fontWeight: "700" }}
            >
              {/* {data?.weather[0]?.main} */}
              {weather}
            </Typography>
            <Typography textAlign={"center"} sx={{ fontWeight: "400" }}>
              H:{Math.trunc(data?.main?.temp_max - 273.15)}° &nbsp;&nbsp; L:
              {Math.trunc(data?.main?.temp_min - 273.15)}°
            </Typography>
          </Stack>
        </Container>
        <Widgets curData={data} />
      </div>
    </>
  );
};

export default AppLayout()(DashBoard);
