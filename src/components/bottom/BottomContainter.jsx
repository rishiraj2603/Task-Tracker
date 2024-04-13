import React from "react";
import Sorting from "./Sorting";
import TaskAdd from "./TaskAdd";
import TaskContainer from "./TaskContainer";
import { TASKSTATUS } from "../../store/store";

const BottomContainter = () => {
  const status = [
    {
      label: "pending",
      color: "#FF4F00",
      value: TASKSTATUS.PENDING,
      nextStatus: TASKSTATUS.INPROGRESS,
    },
    {
      label: "InProgress",
      color: "#EF9B0F",
      value: TASKSTATUS.INPROGRESS,
      nextStatus: TASKSTATUS.COMPELETE,
    },
    {
      label: "Compelete",
      color: "#50C878",
      value: TASKSTATUS.COMPELETE,
      nextStatus: TASKSTATUS.DEPLOYED,
    },
    {
      label: "Deployed",
      color: "#AA98A9",
      value: TASKSTATUS.DEPLOYED,
      nextStatus: TASKSTATUS.DEFFERED,
    },
    {
      label: "Deffered",
      color: "#FF004F",
      value: TASKSTATUS.DEFFERED,
      nextStatus: TASKSTATUS.DESTROY,
    },
  ];
  return (
    <div className="border-2 border-black">
      <div className="flex justify-between gap-3 p-3 m-3">
        <Sorting></Sorting>
        <TaskAdd></TaskAdd>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {status.map((item) => {
          return <Container status={item} key={item.label} />;
        })}
      </div>
    </div>
  );
};

const Container = ({ status }) => {
  const color = status.color;
  return (
    <div className="min-w-full p-4 min-h-64 rounded-2xl">
      <center
        className="w-full h-16 py-4 rounded-t-2xl"
        style={{ background: color }}
      >
        {status.label}
      </center>
      <TaskContainer status={status}></TaskContainer>
    </div>
  );
};

export default BottomContainter;
