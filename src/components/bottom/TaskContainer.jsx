import React, { useState } from "react";
import style from "./TaskContainer.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormEdit from "../Form/FormEdit";
import Modal from "react-modal";

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

Modal.setAppElement(FormEdit);

const TaskContainer = () => {
  const task = useSelector((store) => store.task.tasks);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
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
              ) : item.priority.toLowerCase() === "Medium" ? (
                <button className="w-20 h-10 bg-yellow-500 rounded-full">
                  {item.priority}
                </button>
              ) : (
                <button className="w-20 h-10 line-through bg-pink-700 rounded-full ">
                  Invalid
                </button>
              )}
            </div>
            <div className="flex flex-col justify-between h-48 w-52">
              <p className={`${style.descriptionDiv} overflow-auto `}>
                {item.description}
              </p>
              <form className="flex justify-between w-full">
                <span
                  className="p-2 overflow-auto w-fit"
                  style={{ backgroundColor: "#E0FFFF" }}
                >
                  {item.assigneName}
                </span>
                <div>
                  <button onClick={openModal}>Edit</button>
                  <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >
                    <FormEdit></FormEdit>
                  </Modal>
                </div>
              </form>
            </div>
            <form>
              <button className="w-20 h-10 bg-blue-500 rounded-full">
                Assign
              </button>
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default TaskContainer;
