import React, { useContext } from "react";
import { themaContext } from "./context";
import HeaderComponent from "./HeaderComponent";
import MainComponent from "./MainComponent";
import FooterComponent from "./FooterComponent";
import "./homeComponent.scss";

const HomeComponet = () => {
  const data = useContext(themaContext);
  console.log(data);
  return (
    <div className="container">
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  );
};

export default HomeComponet;
