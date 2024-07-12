import clouds2 from "../assets/Videos/clouds2.mp4";
import mountain from "../assets/Videos/mountain.mp4";
import northenlights from "../assets/Videos/northenlights.mp4";
import cloudySky from "../assets/Videos/cloudySky.mp4";
import mist from "../assets/Videos/mist.mp4";
import mist2 from "../assets/Videos/mist2.mp4";
import raining from "../assets/Videos/raining.mp4";
import snowfall2 from "../assets/Videos/snowfall2.mp4";
import thunder from "../assets/Videos/thunder.mp4";

const videos = [mist, northenlights, mountain];

const randomNumber = Math.random() * (3 - 0) + 0;
const randomVideo = videos[Math.trunc(randomNumber)];

export const weatherVideoSelector = (curWeather) => {
  if (
    curWeather.toString() === "Mist" ||
    curWeather.toString() === "Fog" ||
    curWeather.toString() === "Smoke"
  ) {
    return mist2;
  } else if (curWeather.toString() === "Clear") {
    return clouds2;
  } else if (
    curWeather.toString() === "Scattered Clouds" ||
    curWeather.toString() === "Clouds"
  ) {
    return cloudySky;
  } else if (curWeather.toString() === "Rain") {
    return raining;
  } else if (
    curWeather.toString() === "Snow" ||
    curWeather.toString() === "Snow Fall"
  ) {
    return snowfall2;
  } else if (curWeather.toString() === "Thunder") {
    return thunder;
  } else if (curWeather.toString() === "Haze") {
    return mist;
  } else {
    return randomVideo;
  }
};
