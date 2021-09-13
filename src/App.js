import React, { useState } from "react";
import Intro from "./pages/Intro";
import Home from "./pages/Home";
import GlobalStyle from "./styles/GlobalStyle";
import { LS_USER } from "./constants/localStorage";

function App() {
  const [user, setUser] = useState(localStorage.getItem(LS_USER));

  return (
    <>
      <GlobalStyle />
      {user ? (
        <Home user={user} setUser={setUser} />
      ) : (
        <Intro setUser={setUser} />
      )}
    </>
  );
}

export default App;
