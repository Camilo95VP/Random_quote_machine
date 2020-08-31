import React from "react";
import Qoutes from "../components/quote";
import {Animated} from "react-animated-css";

function App() {
  return (
    <Animated animationIn="zoomInUp">
    <div className="App">
      <Qoutes />
    </div>
    </Animated>
  );
}

export default App;
