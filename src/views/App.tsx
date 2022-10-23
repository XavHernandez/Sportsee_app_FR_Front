import React from "react";
import { Outlet } from "react-router-dom";
import "./App.module.scss";

const App: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <div>App Page</div>
      <Outlet />
    </React.Fragment>
  );
};

export default App;
