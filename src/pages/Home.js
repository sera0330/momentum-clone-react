import React, { useState } from "react";
import { LS_USER, LS_FOCUS } from "../constants/localStorage";
import { randomBackgroundURL } from "../constants/url";
import * as S from "./Home.style";
import Background from "../components/Background";
import Span from "../components/Span";
import TextInput from "../components/TextInput";
import Clock from "../components/Clock";
import Weather from "../components/Weather";
import Focus from "../components/Focus";

const Home = ({ user, setUser }) => {
  const [focus, setFocus] = useState(localStorage.getItem(LS_FOCUS));

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      initFocus(event.target.value);
    }
  };

  const initFocus = (input) => {
    setFocus(input);
    localStorage.setItem(LS_FOCUS, input);
  };

  const handleGreetingClick = (event) => {
    if (window.confirm("Do you want to logout?")) {
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
            <>
              <S.H3>TODAY</S.H3>
              <Focus
                focus={focus}
                setFocus={setFocus}
                clearFocus={clearFocus}
              />
            </>
          ) : (
            <S.FocusContainer>
              <Span
                size="170%"
                weight="400"
                text="What is your main focus for today?"
              />
              <TextInput size="170%" weight="500" onKeyPress={handleKeyPress} />
            </S.FocusContainer>
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
