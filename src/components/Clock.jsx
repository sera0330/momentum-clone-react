import React, { useState, useEffect } from "react";
import Span from "./Span";
import styled from "styled-components";

const Clock = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();

      setDate(`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`);
    }, 10000);

    return () => {
      clearInterval(timeInterval)
    }
  }, []);

  return (
    <Span size="800%" weight="500" text={date} />
  );
}

export default Clock;