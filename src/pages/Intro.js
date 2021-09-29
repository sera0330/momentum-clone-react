import React from "react";
import * as S from "./Intro.style";
import Span from "../components/Common/Span";
import TextInput from "../components/Common/TextInput";
import Background from "../components/Background/Background";
import { LS_FOCUS, LS_USER, LS_THEME } from "../constants/localStorage";
import { KEY_ENTER, THEME_LIGHT } from "../constants/etc";
import { MSG_ASK_NAME } from "../constants/message";

const Intro = ({ setUser }) => {
  const handleKeyPress = (event) => {
    if (event.key === KEY_ENTER) {
      registerUser(event.target.value);
    }
  };

  const registerUser = (user) => {
    setUser(user);
    localStorage.setItem(LS_USER, user);
    localStorage.setItem(LS_FOCUS, "");
    localStorage.setItem(LS_THEME, THEME_LIGHT);
  };

  return (
    <S.Wrapper>
      <Background url="https://images.unsplash.com/photo-1631031651060-424d82e511de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80" />
      <S.MiddleWrapper>
        <S.IntroContainer>
          <Span size="300%" weight="500" text={MSG_ASK_NAME} />
          <TextInput size="270%" onKeyPress={handleKeyPress} />
        </S.IntroContainer>
      </S.MiddleWrapper>
    </S.Wrapper>
  );
};

export default Intro;
