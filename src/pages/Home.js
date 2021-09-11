import React, { useState } from "react";
import Background from "../components/Background";
import Span from "../components/Span";
import TextInput from "../components/TextInput";
import Clock from "../components/Clock";
import * as S from "./Home.style";
import Weather from "../components/Weather";
import { LS_FOCUS } from "../constants/localStorage";
import Focus from "../components/Focus";

const Home = ({ user }) => {
  const [focus, setFocus] = useState(localStorage.getItem(LS_FOCUS));

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setFocus(event.target.value);
      localStorage.setItem(LS_FOCUS, focus);
    }
  };

  return (
    <>
      <Background url="https://images.unsplash.com/photo-1533015235343-2aec29bcb285?ixlib=rb-1.2.1&q=99&fm=jpg&crop=entropy&cs=tinysrgb&w=2048&fit=max&ixid=eyJhcHBfaWQiOjcwOTV9?momo_cache_bg_uuid=e7ca9d83-f174-4426-994d-975273f3ad3f" />
      <S.HomeContainer>
        <S.Header>
          <div>left</div>
          <Weather />
        </S.Header>
        <S.Between />
        <S.Center>
          <Clock />
          <Span size="300%" weight="500" text={`Hello, ` + user + `.`} />
        </S.Center>
        <S.Between>
          {focus ? (
            <div>
              <S.H3>TODAY</S.H3>
              <Focus focus={focus} setFocus={setFocus} />
            </div>
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
