import React, { useState, useEffect } from "react";
import Span from "./Span";

const Clock = () => {
  const [clock, setClock] = useState("");

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();

      setClock(
        `${hours < 10 ? `0${hours}` : hours}:${
          minutes < 10 ? `0${minutes}` : minutes
        }`
      );
    }, 1000);
  }, []);

  return <Span size="850%" weight="500" text={clock} />;
};

export default Clock;
