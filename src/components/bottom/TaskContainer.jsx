import React, { useState } from "react";
import style from "./TaskContainer.module.css";
import { useSelector } from "react-redux";
const TaskContainer = () => {
  const task = useSelector((store) => store.task);
  console.log("🚀 ~ TaskContainer ~ task:", task);
  // if (task.tasks != []) {
  //   const title = task.tasks[0].title;
  //   console.log("🚀 ~ TaskContainer ~ title:", title);
  //   const priority = task.tasks[0].priority;
  //   console.log("🚀 ~ TaskContainer ~ priority:", priority);
  //   const description = task.tasks[0].description;
  //   console.log("🚀 ~ TaskContainer ~ description:", description);
  //   const assigneName = task.tasks[0].assigneName;
  //   console.log("🚀 ~ TaskContainer ~ assigneName:", assigneName);
  // }
  return (
    <div
      className={`${style.main} grid grid-rows-3 gap-3 border-2 border-black`}
    >
      <div className="flex justify-between">
        <span></span>
        <button></button>
      </div>
      <div>
        <p></p>
        <span></span>
      </div>
      <div>
        <span>status</span>
      </div>
    </div>
  );
};

export default TaskContainer;
