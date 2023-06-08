import React, { useEffect } from "react";
import "./App.css";
import MainComponent from "./MainComponent/MainComponent";
import { RouterProvider} from "react-router-dom";
import {useSelector } from "react-redux";
import mainRouter from "./mainRouter/mainRouter";

function App() {
  
  

  return (
    <div>
      <RouterProvider router={mainRouter} />
    </div>
  );
}

export default App;
