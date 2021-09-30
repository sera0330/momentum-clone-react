import React from "react";
import * as S from "./Intro.style";
import Background from "../components/Background/Background";
import UserForm from "../components/UserForm/UserForm";

const Intro = () => {
  return (
    <S.Wrapper>
      <Background url="https://images.unsplash.com/photo-1631031651060-424d82e511de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80" />
      <S.MiddleWrapper>
        <UserForm />
      </S.MiddleWrapper>
    </S.Wrapper>
  );
};

export default Intro;
