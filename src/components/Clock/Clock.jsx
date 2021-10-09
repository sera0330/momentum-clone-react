import React, { useState, useEffect } from "react";
import Span from "../Common/Span";

const getNewClock = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
};

const Clock = () => {
  const [clock, setClock] = useState(getNewClock());

  useEffect(() => {
    setInterval(() => {
      setClock(getNewClock());
    }, 1000);
  }, []);

  return <Span size="1050%" weight="500" text={clock} />;
};

export default Clock;
