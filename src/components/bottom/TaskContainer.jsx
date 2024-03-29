import React from "react";
import style from "./TaskContainer.module.css";
import { useSelector } from "react-redux";
const TaskContainer = ({ status }) => {
  const task = useSelector((store) => store.task.tasks);
  return (
    <div className="flex flex-wrap gap-7">
      {task.map((item) => {
        return (
          <div
            className={`${style.main} flex flex-col gap-3 border-2 border-blue-300 rounded-xl p-6 min-w-64`}
          >
            <div className="flex justify-between h-fit">
              <p className="h-12 overflow-x-scroll w-36">{item.title}</p>
              {item.priority.toLowerCase() === "high" ? (
                <button className="w-20 h-10 bg-red-500 rounded-full">
                  {item.priority}
                </button>
              ) : item.priority.toLowerCase() === "low" ? (
                <button className="w-20 h-10 bg-green-500 rounded-full">
                  {item.priority}
                </button>
              ) : (
                <button className="w-20 h-10 bg-yellow-500 rounded-full">
                  {item.priority}
                </button>
              )}
            </div>
            <div className="flex flex-col justify-between h-48 w-52">
              <p className={`${style.descriptionDiv} overflow-auto `}>
                {item.description}
              </p>
              <span className="p-2" style={{ backgroundColor: "#E0FFFF" }}>
                {item.assigneName}
              </span>
            </div>
            <form>
              <button className="w-20 h-10 bg-blue-500 rounded-full">
                {status}
              </button>
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default TaskContainer;
