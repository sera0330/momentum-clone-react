import React from "react";
import styled from "styled-components";
import Span from "../components/Span";
import TextInput from "../components/TextInput";
import Background from "../components/Background";
import { LS_USER } from "../constants/localStorage";

const Intro = () => {
  const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const Wrapper = styled(FlexBox)`
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
  `

  const MiddleWrapper = styled(Wrapper)`
    justify-content: center;
    z-index: 3;
  `

  const IntroWrapper = styled(FlexBox)`
    max-width: 100%;
    padding: 0 40px;
    position: relative;
    top: -8px;
  `

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // login
      // move to Home
      registerUser(event.target.value);
    }
  }

  const registerUser = (user) => {
    localStorage.setItem(LS_USER, user);
  }

  return (
    <Wrapper>
      <Background url="https://images.unsplash.com/photo-1548588627-f978862b85e1?ixlib=rb-1.2.1&q=99&fm=jpg&crop=entropy&cs=tinysrgb&w=2048&fit=max&ixid=eyJhcHBfaWQiOjcwOTV9?momo_cache_bg_uuid=3eb794f9-8a0e-4476-9947-834ead4dc5ee"/>
      <MiddleWrapper>
        <IntroWrapper>
          <Span size="300%" text="Hello, what's your name?" />
          <TextInput size="270%" onKeyPress={handleKeyPress} />
        </IntroWrapper>
      </MiddleWrapper>
    </Wrapper>
  );
}

export default Intro;