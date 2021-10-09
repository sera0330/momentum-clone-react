import React from "react";
import * as S from "./Intro.style";
import Background from "../components/Background/Background";
import UserForm from "../components/UserForm/UserForm";
import { URL_INTRO_BACKGROUND } from "../constants/url";

const Intro = () => {
  return (
    <S.Wrapper>
      <Background url={URL_INTRO_BACKGROUND} />
      <S.MiddleWrapper>
        <UserForm />
      </S.MiddleWrapper>
    </S.Wrapper>
  );
};

export default Intro;
