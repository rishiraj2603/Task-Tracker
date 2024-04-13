import React, { createElement, useState } from "react";
import style from "./TaskContainer.module.css";
import { useSelector } from "react-redux";
import FormEdit from "../Form/FormEdit";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { changeStatus } from "../../store/store";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const TaskContainer = ({ status }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((store) =>
    store.task.tasks.filter((item) => {
      return item.status === status.value;
    })
  );
  console.log("🚀 ~ TaskContainer ~ status:", status.value, tasks);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(e) {
    e.preventDefault();
    setIsOpen(true);
  }

  function closeModal(e) {
    setIsOpen(false);
  }
  return (
    <div className="flex flex-wrap gap-7">
      {tasks.map((task) => {
        return (
          <div
            className={`${style.main} flex flex-col gap-3 border-2 border-blue-300 rounded-xl p-6 min-w-64`}
          >
            <div className="flex justify-between h-fit">
              <p className="h-12 overflow-x-scroll w-36">{task.title}</p>
              {task.priority.toLowerCase() === "high" ? (
                <button className="w-20 h-10 bg-red-500 rounded-full">
                  {task.priority}
                </button>
              ) : task.priority.toLowerCase() === "low" ? (
                <button className="w-20 h-10 bg-green-500 rounded-full">
                  {task.priority}
                </button>
              ) : task.priority.toLowerCase() === "Medium" ? (
                <button className="w-20 h-10 bg-yellow-500 rounded-full">
                  {task.priority}
                </button>
              ) : (
                <button className="w-20 h-10 line-through bg-pink-700 rounded-full ">
                  Invalid
                </button>
              )}
            </div>
            <div className="flex flex-col justify-between h-48 w-52">
              <p className={`${style.descriptionDiv} overflow-auto `}>
                {task.description}
              </p>
              <form className="flex justify-between w-full">
                <span
                  className="p-2 overflow-auto w-fit"
                  style={{ backgroundColor: "#E0FFFF" }}
                >
                  {task.assigneName}
                </span>
                <div>
                  <button onClick={openModal}>Edit</button>
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                  >
                    <FormEdit closeModal={closeModal} item={task}></FormEdit>
                  </Modal>
                </div>
              </form>
            </div>
            <button
              className="w-20 h-10 bg-blue-500 rounded-full"
              onClick={(e) => {
                dispatch(
                  changeStatus({
                    taskId: task.taskId,
                    nextStatus: status.nextStatus,
                  })
                );
              }}
            >
              Move to : {status.nextStatus}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TaskContainer;
