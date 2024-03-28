import React, { useRef } from "react";
import style from "./TaskForm.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createTask } from "../../store/store";
const TaskForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const taskAssigneName = useRef();
  const taskTitle = useRef();
  const taskPrioity = useRef();
  const taskDesc = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const assigneName = taskAssigneName.current.value;
    const title = taskTitle.current.value;
    const priority = taskPrioity.current.value;
    const description = taskDesc.current.value;
    dispatch(createTask({ assigneName, title, priority, description }));
    taskAssigneName.current.value = "";
    taskTitle.current.value = "";
    taskPrioity.current.value = "";
    taskDesc.current.value = "";
    navigate("/");
  }

  return (
    <form className={`${style.cf}`} onSubmit={handleSubmit}>
      <div className={`${style.half} ${style.left} ${style.cf}`}>
        <input
          type="text"
          id="input-name"
          ref={taskAssigneName}
          placeholder="Assigne Name"
        />
        <input
          type="text"
          id="input-title"
          ref={taskTitle}
          placeholder="Title"
        />
        <input
          type="text"
          id="input-priority"
          ref={taskPrioity}
          placeholder="Priority"
        />
      </div>
      <div className={`${style.half} ${style.right} ${style.cf}`}>
        <textarea
          name="description"
          type="text"
          id="input-description"
          ref={taskDesc}
          placeholder="Description"
        ></textarea>
      </div>
      <input type="submit" value="Submit" id="input-submit" />
    </form>
  );
};

export default TaskForm;
