// import { ConstructionOutlined } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import "./Timer.css";

function Timer() {
  const [countDays, setCountDays] = useState("00");
  const [countHours, setCountHours] = useState("00");
  const [countMinutes, setCountMinutes] = useState("00");
  const [countSeconds, setCountSeconds] = useState("00");

  const expiryDate = new Date("November 1, 2022 00:00:00").getTime();
  // console.log("expiry date",expiryDate);
  const countDownTimer = () => {
    const timeInterval = setInterval(() => {
      const now = new Date().getTime();
      // console.log("now:" , now);
      const remainingDateTime = expiryDate - now;
      const totalDays = Math.floor(remainingDateTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor(
        (remainingDateTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const totalMinutes = Math.floor(
        (remainingDateTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const totalSeconds = Math.floor((remainingDateTime % (1000 * 60)) / 1000);

      // console.log("remainingDateTime:", remainingDateTime);
      // console.log("totalDays:", totalDays);
      // console.log("totalHours:", totalHours);
      // console.log("totalMinutes:", totalMinutes);
      // console.log("totalSeconds:", totalSeconds);

      if (remainingDateTime < 0) {
        clearInterval(timeInterval);
      } else {
        setCountDays(totalDays);
        setCountHours(totalHours);
        setCountMinutes(totalMinutes);
        setCountSeconds(totalSeconds);
      }
    }, 1000);
  };
  useEffect(() => {
    countDownTimer();
  });
  // console.log(countDays);
  return (
    <div className="container container-timer">
      <span>{countDays} </span> days : <span>{countHours}</span>
      hrs : <span>{countMinutes}</span>
      min : <span>{countSeconds}</span> sec
    </div>
  );
}


export const Days = () => {
  const [countDays, setCountDays] = useState("00");
  
  const expiryDate = new Date("November 1, 2022 00:00:00").getTime();
  const countDownTimer = () => {
    const timeInterval = setInterval(() => {
      const now = new Date().getTime();
      const remainingDateTime = expiryDate - now;
      const totalDays = Math.floor(remainingDateTime / (1000 * 60 * 60 * 24));
     
      if (remainingDateTime < 0) {
        clearInterval(timeInterval);
      } else {
        setCountDays(totalDays);
      }
    }, 1000);
  };
  useEffect(() => {
    countDownTimer();
  });
  console.log("days",countDays);
  return countDays;
  // (
    // <div className="container container-timer">
    //   <span>{countDays} </span> days : <span>{countHours}</span>
    //   hrs : <span>{countMinutes}</span>
    //   min : <span>{countSeconds}</span> sec
    // </div>
    // countDays;
  // );
}


export default Timer;
