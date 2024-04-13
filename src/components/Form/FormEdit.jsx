import React from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../../store/store";

const FormEdit = ({ closeModal, item }) => {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    console.log("🚀 ~ submitHandler ~ e:", e);
    e.preventDefault();
    const updatedTask = {};
    const data = new FormData(e.target);
    for (const [name, value] of data) {
      updatedTask[name] = value;
    }
    dispatch(updateTask(updatedTask));
    closeModal();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <span className="float-left my-5 text-2xl">Title :</span>
        <input type="text" name="title" defaultValue={item.title} />
        <span className="float-left my-5 text-2xl">Description :</span>
        <textarea
          name="description"
          cols="30"
          rows="10"
          defaultValue={item.description}
        ></textarea>
        <span className="float-left my-5 text-2xl">Assigne :</span>
        <input type="text" name="assigneName" defaultValue={item.assigneName} />
        <span className="float-left my-5 text-2xl">Priority :</span>
        <input type="text" name="priority" defaultValue={item.priority} />
        <span className="float-left my-5 text-2xl">Status :</span>
        <input type="text" name="status" defaultValue="Not Valid" />
        <input
          type="text"
          name="taskId"
          value={item.taskId}
          className="hidden"
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default FormEdit;
