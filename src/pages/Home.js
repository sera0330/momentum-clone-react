import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { lightMode, darkMode } from "../styles/theme";
import * as S from "./Home.style";
import Background from "../components/Background/Background";
import Weather from "../components/Weather/Weather";
import Clock from "../components/Clock/Clock";
import Greeting from "../components/Greeting/Greeting";
import Focus from "../components/Focus/Focus";
import Quote from "../components/Quote/Quote";
import Todo from "../components/Todo/Todo";
import ThemeToggleButton from "../components/ThemeToggleButton/ThemeToggleButton";
import { URL_RANDOM_BACKGROUND } from "../constants/url";
import { THEME_LIGHT } from "../constants/etc";

const Home = () => {
  const theme = useSelector((state) => state.theme);

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
          <Greeting />
        </S.Center>
        <S.Between>
          <Focus />
        </S.Between>
        <S.Footer>
          <S.BottomLeft>
            <ThemeToggleButton />
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
