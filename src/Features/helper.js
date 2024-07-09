import moment from 'moment'

export const changeTimeFormat = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  // Check whether AM or PM
  let newformat = hours >= 12 ? "PM" : "AM";

  // Find current hour in AM-PM Format
  hours = hours % 12;

  // To display "0" as "12"
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return hours + ":" + minutes + " " + newformat;
}



export const getLast6Days = () => {
  const curDate = moment();

  const last6Days = [];

  for (let i = 0; i < 6; i++) {
    const dayDate = curDate.clone().add(i, "days");
    const days = dayDate.format("dddd");
    last6Days.push(days);
  }

  return last6Days;
};