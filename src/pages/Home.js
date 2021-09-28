import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightMode, darkMode } from "../styles/theme";
import * as S from "./Home.style";
import Background from "../components/Background";
import Weather from "../components/Weather";
import Clock from "../components/Clock";
import Greeting from "../components/Greeting";
import FocusAsk from "../components/FocusAsk";
import Focus from "../components/Focus";
import Quote from "../components/Quote";
import Todo from "../components/Todo";
import ThemeToggle from "../components/ThemeToggle";
import {
  LS_FOCUS,
  LS_FOCUS_CHECKED,
  LS_THEME,
} from "../constants/localStorage";
import { URL_RANDOM_BACKGROUND } from "../constants/url";
import { THEME_LIGHT } from "../constants/etc";

const Home = ({ user, setUser }) => {
  const [focus, setFocus] = useState(localStorage.getItem(LS_FOCUS));
  const [theme, setTheme] = useState(localStorage.getItem(LS_THEME));

  useEffect(() => {
    localStorage.setItem(LS_FOCUS, focus);
  }, [focus]);

  const clearFocus = () => {
    setFocus("");
    localStorage.removeItem(LS_FOCUS);
    localStorage.removeItem(LS_FOCUS_CHECKED);
  };

  return (
    <ThemeProvider theme={theme === THEME_LIGHT ? lightMode : darkMode}>
      <Background url={URL_RANDOM_BACKGROUND} />
      <S.HomeContainer>
        <S.Header>
          <Weather />
        </S.Header>
        <S.Between />
        <S.Center>
          <Clock />
          <Greeting user={user} setUser={setUser} clearFocus={clearFocus} />
        </S.Center>
        <S.Between>
          {focus ? (
            <Focus focus={focus} setFocus={setFocus} clearFocus={clearFocus} />
          ) : (
            <FocusAsk setFocus={setFocus} />
          )}
        </S.Between>
        <S.Footer>
          <S.BottomLeft>
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </S.BottomLeft>
          <S.BottomCenter>
            <Quote />
          </S.BottomCenter>
          <S.BottomRight>
            <Todo />
          </S.BottomRight>
        </S.Footer>
      </S.HomeContainer>
    </ThemeProvider>
  );
};

export default Home;
