import React, { useState, useEffect } from "react";
import {
  LS_USER,
  LS_FOCUS,
  LS_FOCUS_CHECKED,
  CHECKED_FALSE,
} from "../constants/localStorage";
import { randomBackgroundURL } from "../constants/url";
import * as S from "./Home.style";
import Background from "../components/Background";
import Span from "../components/Span";
import TextInput from "../components/TextInput";
import Clock from "../components/Clock";
import Weather from "../components/Weather";
import Focus from "../components/Focus";
import { askFocus, askLogout } from "../constants/messages";

const Home = ({ user, setUser }) => {
  const [focus, setFocus] = useState(localStorage.getItem(LS_FOCUS));

  useEffect(() => {
    localStorage.setItem(LS_FOCUS, focus);
  }, [focus]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      initFocus(event.target.value);
    }
  };

  const initFocus = (input) => {
    setFocus(input);
    localStorage.setItem(LS_FOCUS_CHECKED, CHECKED_FALSE);
  };

  const handleGreetingClick = () => {
    if (window.confirm(askLogout)) {
      logout();
    }
  };

  const logout = () => {
    clearFocus();
    setUser(null);
    localStorage.removeItem(LS_USER);
  };

  const clearFocus = () => {
    setFocus(null);
    localStorage.removeItem(LS_FOCUS);
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
          <div onClick={handleGreetingClick}>
            <Span size="300%" weight="500" text={`Hello, ` + user + `.`} />
          </div>
        </S.Center>
        <S.Between>
          {focus ? (
            <S.FocusInputContainer>
              <S.H3>TODAY</S.H3>
              <Focus
                focus={focus}
                setFocus={setFocus}
                clearFocus={clearFocus}
              />
            </S.FocusInputContainer>
          ) : (
            <S.FocusInputContainer>
              <Span size="170%" weight="400" text={askFocus} />
              <TextInput
                size="170%"
                defaultValue={localStorage.getItem(LS_FOCUS)}
                onKeyPress={handleKeyPress}
              />
            </S.FocusInputContainer>
          )}
        </S.Between>
        <S.Footer>
          <div>left</div>
          <div>center</div>
          <div>right</div>
        </S.Footer>
      </S.HomeContainer>
    </>
  );
};

export default Home;
