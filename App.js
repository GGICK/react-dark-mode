import { useState } from "react";
import "./App.css";
import { themaContext } from "./component/context";
import HomeComponet from "./component/HomeComponet";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <themaContext.Provider value={{ darkMode, setDarkMode }}>
      <HomeComponet />
    </themaContext.Provider>
  );
}

export default App;
