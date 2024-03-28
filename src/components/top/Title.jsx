import React from "react";
import style from "./Title.module.css";
const Title = () => {
  return (
    <div
      className={`${style.header} border-2 border-black text-4xl font-pt flex justify-between`}
    >
      <div className="p-2 m-10 ">Task Board</div>
      <img src="public/image.png" alt="" className="h-full p-2 mx-4" />
    </div>
  );
};

export default Title;
