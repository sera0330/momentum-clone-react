import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { lightMode, darkMode } from "../styles/theme";
import * as S from "./Home.style";
import Background from "../components/Background/Background";
import Weather from "../components/Weather/Weather";
import Clock from "../components/Clock/Clock";
import Greeting from "../components/Greeting/Greeting";
import FocusAsk from "../components/Focus/FocusAsk";
import Focus from "../components/Focus/Focus";
import Quote from "../components/Quote/Quote";
import Todo from "../components/Todo/Todo";
import ThemeToggleButton from "../components/ThemeToggleButton/ThemeToggleButton";
import { LS_THEME } from "../constants/localStorage";
import { URL_RANDOM_BACKGROUND } from "../constants/url";
import { THEME_LIGHT } from "../constants/etc";

const Home = ({ user, setUser }) => {
  const focus = useSelector((state) => state.focus.value);

  const [theme, setTheme] = useState(localStorage.getItem(LS_THEME));

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
          <Greeting user={user} setUser={setUser} />
        </S.Center>
        <S.Between>{focus ? <Focus /> : <FocusAsk />}</S.Between>
        <S.Footer>
          <S.BottomLeft>
            <ThemeToggleButton theme={theme} setTheme={setTheme} />
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
