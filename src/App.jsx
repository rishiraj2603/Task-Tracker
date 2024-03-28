import React from "react";
import Title from "./components/top/Title";
import BottomContainter from "./components/bottom/BottomContainter";

const App = () => {
  return (
    <div className="p-12 m-10">
      <Title></Title>
      <BottomContainter />
    </div>
  );
};

export default App;
