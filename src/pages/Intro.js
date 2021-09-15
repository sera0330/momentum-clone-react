import React from "react";
import * as S from "./Intro.style";
import Span from "../components/Span";
import TextInput from "../components/TextInput";
import Background from "../components/Background";
import { LS_FOCUS, LS_USER } from "../constants/localStorage";

const Intro = ({ setUser }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      registerUser(event.target.value);
    }
  };

  const registerUser = (user) => {
    setUser(user);
    localStorage.setItem(LS_USER, user);
    localStorage.setItem(LS_FOCUS, "");
  };

  return (
    <S.Wrapper>
      <Background url="https://farm5.staticflickr.com/4301/36165186121_2e32e53810_k.jpg?momo_cache_bg_uuid=fc79dc0a-fba1-4472-96c3-eeaac1f5a228" />
      <S.MiddleWrapper>
        <S.IntroContainer>
          <Span size="300%" weight="500" text="Hello, what's your name?" />
          <TextInput size="270%" onKeyPress={handleKeyPress} />
        </S.IntroContainer>
      </S.MiddleWrapper>
    </S.Wrapper>
  );
};

export default Intro;
