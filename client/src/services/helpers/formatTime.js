import { useEffect, useState } from "react";
// import moment from "moment";

const useFormattedTime = (time) => {
  const [formattedTime, setFormattedTime] = useState("No date available");

  useEffect(() => {
    if (time) {
      const date = moment(time);

      // Ensure the date is valid before formatting
      if (date.isValid()) {
        setFormattedTime(date.fromNow()); // Formats as "5 minutes ago", etc.
      } else {
        setFormattedTime("Invalid date");
      }
    } else {
      setFormattedTime("...");
    }
  }, [time]);

  return formattedTime;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const timeAgo = (dateString) => {
  const now = new Date();
  const date = new Date(dateString);
  const seconds = Math.floor((now - date) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) {
    return "just now";
  } else if (minutes < 60) {
    return `${minutes} ${
      minutes === 1 ? "min" : "mins"
    } ago`;
  } else if (hours < 24) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (days < 30) {
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else {
    return formatDate(dateString);
  }
};


export default useFormattedTime;
