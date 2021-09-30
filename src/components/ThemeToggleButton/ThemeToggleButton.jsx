import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "./themeSlice";
import * as S from "./ThemeToggleButton.style";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { THEME_LIGHT } from "../../constants/etc";

const Theme = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  const handleClickToggle = () => {
    dispatch(toggle());
  };

  return (
    <S.ToggleWrapper onClick={handleClickToggle}>
      <S.Icon title={theme}>
        {theme === THEME_LIGHT ? <FaToggleOn /> : <FaToggleOff />}
      </S.Icon>
    </S.ToggleWrapper>
  );
};

export default Theme;
