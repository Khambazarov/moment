import moment from "moment";

// const moment = require("moment");

// const todaysDate = moment().format("YYYY-MM-DD, hh:mm:ss");

// console.log(todaysDate);

const dateInput = document.querySelector("#date_input");
const getDateBtn = document.querySelector("#get_date_Btn");
// const getResultWeeks = document.querySelector("#get_result_weeks");
const getResultDays = document.querySelector("#get_result_days");
const getResultHours = document.querySelector("#get_result_hours");
const getResultMinutes = document.querySelector("#get_result_minutes");
const getResultSeconds = document.querySelector("#get_result_seconds");

getDateBtn.onclick = () => {
  const dayFinder = moment(dateInput.value);

  // getResultWeeks.innerHTML =
  //   dayFinder.diff(moment(), "weeks") === -1 ||
  //   dayFinder.diff(moment(), "weeks") === 1
  //     ? `${dayFinder.diff(moment(), "weeks")} week`
  //     : `${dayFinder.diff(moment(), "weeks")} weeks`;

  getResultDays.innerHTML =
    dayFinder.diff(moment(), "days") % 7 === -1 ||
    dayFinder.diff(moment(), "days") % 7 === 1
      ? `${dayFinder.diff(moment(), "days") % 7} day`
      : `${dayFinder.diff(moment(), "days") % 7} days`;

  getResultHours.innerHTML =
    dayFinder.diff(moment(), "hours") % 24 === -1 ||
    dayFinder.diff(moment(), "hours") % 24 === 1
      ? `${dayFinder.diff(moment(), "hours") % 24} hour`
      : `${dayFinder.diff(moment(), "hours") % 24} hours`;

  getResultMinutes.innerHTML =
    dayFinder.diff(moment(), "minutes") % 60 === -1 ||
    dayFinder.diff(moment(), "minutes") % 60 === 1
      ? `${dayFinder.diff(moment(), "minutes") % 60} minute`
      : `${dayFinder.diff(moment(), "minutes") % 60} minutes`;

  getResultSeconds.innerHTML =
    dayFinder.diff(moment(), "seconds") % 60 === -1 ||
    dayFinder.diff(moment(), "seconds") % 60 === 1
      ? `${dayFinder.diff(moment(), "seconds") % 60} second`
      : `${dayFinder.diff(moment(), "seconds") % 60} seconds`;
};
