import React from "react";
import Home from "../../Pages/Home/Home";
import './AppLayout.css';

const AppLayout = () => (WrapComp) => {
  return (props) => {
    return (
      <div className="appLayout">
        <Home />
        <WrapComp />
      </div>
    );
  };
};

export default AppLayout;
