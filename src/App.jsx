import { useState } from "react";

import "./App.css";
import { BasicTable } from "./components/BasicTable";

const App = () => {
  return (
    <>
      <div>
        <h1>Tanstack React Table</h1>
        <BasicTable />
      </div>
    </>
  );
};

export default App;
