import React, { useEffect } from "react";
import * as S from "./ThemeToggle.style";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { THEME_DARK, THEME_LIGHT } from "../constants/etc";
import { LS_THEME } from "../constants/localStorage";

const Theme = ({ theme, setTheme }) => {
  useEffect(() => {
    localStorage.setItem(LS_THEME, theme);
  }, [theme]);

  const handleClickToggle = () => {
    if (theme === THEME_LIGHT) {
      setTheme(THEME_DARK);
    } else {
      setTheme(THEME_LIGHT);
    }
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
