import React, { useContext } from "react";
import { themaContext } from "./context";

const MainComponent = () => {
  const { darkMode } = useContext(themaContext);
  const theme = {
    backgroundColor: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black"
  };
  return (
    <div className="main" style={theme}>
      메인
    </div>
  );
};

export default MainComponent;
