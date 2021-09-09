import React from "react";
import Background from "../components/Background";
import Span from "../components/Span";
import TextInput from "../components/TextInput";
import Clock from "../components/Clock";
import * as S from "./Home.style";

const Home = ({ user }) => {
  return (
    <>
      <Background url="https://images.unsplash.com/photo-1533015235343-2aec29bcb285?ixlib=rb-1.2.1&q=99&fm=jpg&crop=entropy&cs=tinysrgb&w=2048&fit=max&ixid=eyJhcHBfaWQiOjcwOTV9?momo_cache_bg_uuid=e7ca9d83-f174-4426-994d-975273f3ad3f" />
      <S.Wrapper>
        <S.Header>
          <div>left</div>
          <div>center</div>
          <div>right</div>
        </S.Header>
        <S.Between />
        <S.Center>
          <Clock />
          <Span size="300%" weight="400" text={`Hello, ` + user + `.`} />
        </S.Center>
        <S.Between>
          <S.FocusContainer>
            <S.FocusWrapper>
              <S.Prompt>
                <Span
                  size="200%"
                  weight="400"
                  text="What is your main focus for today?"
                />
                <TextInput size="200%" />
              </S.Prompt>
            </S.FocusWrapper>
          </S.FocusContainer>
        </S.Between>
        <S.Footer>
          <div>left</div>
          <div>center</div>
          <div>right</div>
        </S.Footer>
      </S.Wrapper>
    </>
  );
};

export default Home;
