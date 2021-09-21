import React, { useState, useEffect } from "react";
import * as S from "./Home.style";
import Background from "../components/Background";
import Weather from "../components/Weather";
import Clock from "../components/Clock";
import Greeting from "../components/Greeting";
import FocusAsk from "../components/FocusAsk";
import Focus from "../components/Focus";
import Quote from "../components/Quote";
import Todo from "../components/Todo";
import { LS_FOCUS, LS_FOCUS_CHECKED } from "../constants/localStorage";
import { randomBackgroundURL } from "../constants/url";

const Home = ({ user, setUser }) => {
  const [focus, setFocus] = useState(localStorage.getItem(LS_FOCUS));

  useEffect(() => {
    localStorage.setItem(LS_FOCUS, focus);
  }, [focus]);

  const clearFocus = () => {
    setFocus("");
    localStorage.removeItem(LS_FOCUS);
    localStorage.removeItem(LS_FOCUS_CHECKED);
  };

  return (
    <>
      <Background url={randomBackgroundURL} />
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
          <S.BottomLeft></S.BottomLeft>
          <S.Bottom>
            <Quote />
          </S.Bottom>
          <S.BottomRight>
            <Todo />
          </S.BottomRight>
        </S.Footer>
      </S.HomeContainer>
    </>
  );
};

export default Home;
