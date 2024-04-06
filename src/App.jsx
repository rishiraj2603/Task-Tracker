import React from "react";
import HomePage from "./HomePage";
import TaskForm from "./components/Form/TaskForm";
import { Route, Routes } from "react-router-dom";
import FormEdit from "./components/Form/FormEdit";

const App = () => {
  return (
    <div className="p-12 m-10">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AddTask" element={<TaskForm />} />
        <Route path="/edit/:item" element={<FormEdit />} />
      </Routes>
    </div>
  );
};

export default App;
