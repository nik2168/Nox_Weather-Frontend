import { Search } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import HomeCities from "../../Components/Cities/HomeCities";
import "./home.css";
import { server } from "../../Features/config";
import { userNotExists } from "../../redux/reducer/authslice";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");
  const [curData, setData] = useState({});
  const [loading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

  const GetCityWeatherData = async (e) => {
    e.preventDefault();
    navigate(`/dashboard/${search}`);
    setSearch("");
  };

  const userWatchlist = user?.cities;

  const logoutHandler = async (e) => {
    try {
      const { data } = await axios.get(`${server}/api/v1/user/logout`, {
        withCredentials: true,
      });
      toast.success(data?.message);
      dispatch(userNotExists());
    } catch (err) {
      toast.error(err?.response?.data?.message || "something went wrong !");
    }
  };

  return (
    <div className="home">
      <Box className="homeHeader">
        <Typography variant="h4" sx={{ fontSize: "1.8rem", fontWeight: "800" }}>
          Weather
        </Typography>
        <div className="buttonDiv">
          <button onClick={(e) => logoutHandler(e)}>Logout</button>
        </div>
      </Box>

      <form onSubmit={(e) => GetCityWeatherData(e)} className="textAreaBox">
        <Search className="SearchIcon" />
        <input
          type="text"
          name="city"
          id="textarea"
          placeholder="search for a city ..."
          className="cityNameTextArea"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        ></input>
      </form>
      <ul className="homeCitiesBox">
      {  userWatchlist.map((curCity, idx) => {
        return <HomeCities key={curCity} idx={idx} curCity={curCity} />;
      })
      }
      </ul>
    </div>
  );
};

export default Home;
