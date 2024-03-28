import React, { useState } from "react";
import style from "./TaskContainer.module.css";
import { useSelector } from "react-redux";
const TaskContainer = ({ status }) => {
  const task = useSelector((store) => store.task.tasks);
  return (
    <div>
      {task.map((item) => {
        return (
          <div
            className={`${style.main} grid grid-rows-3 gap-3 border-2 border-black`}
          >
            <div className="flex justify-between">
              <span>{item.title}</span>
              <button>{item.priority}</button>
            </div>
            <div>
              <p>{item.desc}</p>
              <span>{item.assigneName}</span>
            </div>
            <form>
              <button>{status}</button>
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default TaskContainer;
