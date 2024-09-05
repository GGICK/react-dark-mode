import React, { useContext } from "react";
import { themaContext } from "./context";

const FooterComponent = () => {
  const { darkMode } = useContext(themaContext);
  const theme = {
    backgroundColor: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black"
  };
  return (
    <div className="footer" style={theme}>
      푸터
    </div>
  );
};

export default FooterComponent;
