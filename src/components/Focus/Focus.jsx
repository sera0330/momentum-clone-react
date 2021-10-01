import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodayFocus from "./TodayFocus";
import FocusAsk from "./FocusAsk";

const Focus = () => {
  const focus = useSelector((state) => state.focus);

  return <>{focus ? <TodayFocus /> : <FocusAsk />}</>;
};

export default Focus;
