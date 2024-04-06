import React from "react";
import { useParams } from "react-router-dom";

const FormEdit = () => {
  const params = useParams();
  console.log("🚀 ~ FormEdit ~ params:", params);
  const submitHandler = (e) => {
    e.preventDefault;
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <span className="float-left my-5 text-2xl">Title :</span>
        <input type="text" name="title" />
        <span className="float-left my-5 text-2xl">Description :</span>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <span className="float-left my-5 text-2xl">Assigne :</span>
        <input type="text" />
        <span className="float-left my-5 text-2xl">Priority :</span>
        <input type="text" />
        <span className="float-left my-5 text-2xl">Status :</span>
        <input type="text" />

        <button> sumbit</button>
      </form>
    </div>
  );
};

export default FormEdit;
