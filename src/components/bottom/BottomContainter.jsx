import React from "react";
import Sorting from "./Sorting";
import TaskAdd from "./TaskAdd";
import TaskContainer from "./TaskContainer";

const BottomContainter = () => {
  const status = [
    ["Pending", "#FF4F00"],
    ["InProgress", "#EF9B0F"],
    ["Compelete", "#50C878"],
    ["Deployed", "#AA98A9"],
    ["Deffered", "#FF004F"],
  ];
  return (
    <div className="border-2 border-black">
      <div className="flex justify-between gap-3 p-3 m-3">
        <Sorting></Sorting>
        <TaskAdd></TaskAdd>
      </div>
      <div className="grid gap-2 grid-row-5">
        {status.map((item) => {
          return <Container status={item} key={item[0]} />;
        })}
      </div>
    </div>
  );
};

const Container = ({ status }) => {
  const color = status[1];
  return (
    <div className="min-w-full p-4 rounded-2xl h-96">
      <center
        className="w-full h-16 py-4 rounded-t-2xl"
        style={{ background: color }}
      >
        {status[0]}
      </center>
      {status[0] === "Pending" ? (
        <TaskContainer status={status[0]}></TaskContainer>
      ) : (
        " "
      )}
    </div>
  );
};

export default BottomContainter;
