import React, { useEffect, useState } from "react";
import Intro from "./routes/Intro";
import Home from "./routes/Home";
import { LS_USER } from "./constants/localStorage";

function App() {
  const [user, setUser] = useState(localStorage.getItem(LS_USER));

  console.log(user);

  return (
    <>
      {user ? <Home /> : <Intro />}
    </>
  );
}

export default App;
