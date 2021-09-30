import React from "react";
import { useSelector } from "react-redux";
import TodayFocus from "./TodayFocus";
import FocusAsk from "./FocusAsk";

const Focus = () => {
  const focus = useSelector((state) => state.focus.value);

  return <>{focus ? <TodayFocus /> : <FocusAsk />}</>;
};

export default Focus;
