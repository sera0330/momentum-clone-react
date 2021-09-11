import React from "react";
import Span from "../components/Span";
import TextInput from "../components/TextInput";
import Background from "../components/Background";
import { LS_USER } from "../constants/localStorage";
import * as S from "./Intro.style";

const Intro = ({ setUser }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      registerUser(event.target.value);
    }
  };

  const registerUser = (user) => {
    setUser(user);
    localStorage.setItem(LS_USER, user);
  };

  return (
    <S.Wrapper>
      <Background url="https://images.unsplash.com/photo-1548588627-f978862b85e1?ixlib=rb-1.2.1&q=99&fm=jpg&crop=entropy&cs=tinysrgb&w=2048&fit=max&ixid=eyJhcHBfaWQiOjcwOTV9?momo_cache_bg_uuid=3eb794f9-8a0e-4476-9947-834ead4dc5ee" />
      <S.MiddleWrapper>
        <S.IntroContainer>
          <Span size="300%" weight="400" text="Hello, what's your name?" />
          <TextInput size="270%" onKeyPress={handleKeyPress} />
        </S.IntroContainer>
      </S.MiddleWrapper>
    </S.Wrapper>
  );
};

export default Intro;
