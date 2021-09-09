import React, { useState } from "react";
import Intro from "./pages/Intro";
import Home from "./pages/Home";
import { LS_USER } from "./constants/localStorage";

function App() {
  const [user, setUser] = useState(localStorage.getItem(LS_USER));

  return <>{user ? <Home user={user} /> : <Intro setUser={setUser} />}</>;
}

export default App;
