import { Typography } from "@mui/material";

export const renderDailyData = (dailyData) => {
  const DataElements = [];

  for (let key in dailyData) {
    let data = dailyData[key];

    const date = new Date(data?.dt * 1000);

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDayOfWeek = daysOfWeek[date.getDay()];
    let curWeather = data?.weather;
    let weather = "";
    let weatherPng = "";
    if (curWeather) {
      weather = curWeather[0]?.main;
      weatherPng = curWeather[0]?.icon;
    }

    DataElements.push(
      <div key={data?.main?.temp}>
        <Typography sx={{ fontSize: "0.9rem", fontWeight: "300" }}>
          {currentDayOfWeek.slice(0, 3)}
        </Typography>
        <img
          src={`https://openweathermap.org/img/wn/${weatherPng}@2x.png`}
          alt="png"
          style={{ width: "4rem", height: "4rem" }}
        />
        {/* <Cloud sx={{ height: "2.3rem", width: "2.3rem" }} /> */}
        <Typography sx={{ fontSize: "1rem", fontWeight: "300" }}>
          {Math.trunc(data?.main?.temp - 273.15)}°
        </Typography>
      </div>
    );
  }

  return DataElements;
};


export const renderDailyTemp = (dailyData) => {
  const DataElements = [];

  for (let key in dailyData) {
    let data = dailyData[key];

    const date = new Date(data?.dt * 1000);

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDayOfWeek = daysOfWeek[date.getDay()];
    let curWeather = data?.weather;
    let weather = "";
    let weatherPng = "";
    if (curWeather) {
      weather = curWeather[0]?.main;
      weatherPng = curWeather[0]?.icon;
    }

    DataElements.push(Math.trunc(data?.main?.temp - 273.15).toString());
  }

  return DataElements;
};
