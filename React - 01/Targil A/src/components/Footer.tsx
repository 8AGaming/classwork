// With God's Help
import { useState } from "react";
const clock_core = (
  hours: string = "00",
  minutes: string = "00",
  seconds: string = "00"
) => {
  const second = Number(seconds);
  if (second < 10) {
    seconds = "0" + String(second);
  }
  const minute = Number(minutes);
  if (minute < 10) {
    minutes = "0" + String(minute);
  }
  const hour = Number(hours);
  if (hour < 10) {
    hours = "0" + String(hour);
  }
  return `${hours}:${minutes}:${seconds}`;
};
const currentTime = () => {
  const now = new Date();
  const hours = String(now.getHours());
  const minutes = String(now.getMinutes());
  const seconds = String(now.getSeconds());
  return clock_core(hours, minutes, seconds);
};
const currentDate = () => {
  const now = new Date();
  const day = String(now.getDate());
  const month = String(now.getMonth());
  const year = String(now.getFullYear());
  return `${day}.${month}.${year}`;
};

const Footer = () => {
  const [time, setTime] = useState("");
  setTimeout(() => {
    setTime(currentTime());
  }, 1000);
  return (
    <div id="footer">
      Asaf AI Perets {time} {currentDate()}
    </div>
  );
};

export default Footer;
