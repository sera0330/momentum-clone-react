import React from "react";
import { useSelector } from "react-redux";
import Intro from "./pages/Intro";
import Home from "./pages/Home";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  const user = useSelector((state) => state.user.value);

  return (
    <>
      <GlobalStyle />
      {user ? <Home /> : <Intro />}
    </>
  );
}

export default App;
