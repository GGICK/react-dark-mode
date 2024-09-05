import React, { useContext } from "react";
import { themaContext } from "./context";

const HeaderComponent = () => {
  const { darkMode, setDarkMode } = useContext(themaContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = {
    backgroundColor: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black"
  };

  return (
    <div className="header" style={theme}>
      헤더
      {darkMode ? (
        <button className="toggleBtn" onClick={toggleDarkMode}>
          😴
        </button>
      ) : (
        <button className="toggleBtn" onClick={toggleDarkMode}>
          🤩
        </button>
      )}
    </div>
  );
};

export default HeaderComponent;
