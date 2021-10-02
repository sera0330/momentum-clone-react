import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodayFocus from "./TodayFocus";
import FocusAsk from "./FocusAsk";
import { focusEditModeOff } from "./focusSlice";

const Focus = () => {
  const focus = useSelector((state) => state.focus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (focus.value !== "" && focus.editable) {
      dispatch(focusEditModeOff());
    }
  }, []);

  return <>{focus.editable ? <FocusAsk /> : <TodayFocus />}</>;
};

export default Focus;
