import React from "react";

const Sorting = () => {
  $(function () {
    $('input[name="daterange"]').daterangepicker({
      opens: "right",
      locale: {
        format: "DD/MM/YYYY",
      },
    });
  });
  return (
    <div className="flex flex-col gap-7">
      <div className="flex gap-9">
        <span>Filter By:</span>
        <input
          type="text"
          className="border-2 border-black"
          placeholder="Assigne Name"
        />
        <div>
          <label htmlFor="priority">Priority: </label>
          <select name="priority" id="priority">
            <option value="In Progress">In Progress</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Completed">Completed</option>
            <option value="Deferred">Deferred</option>
          </select>
        </div>
        <input
          type="text"
          name="daterange"
          value="27/03/2024 - 04/01/2024"
          className="w-48 "
        />
      </div>
      <div className="flex gap-9">
        <span>Sort By: </span>
        <div>
          <label for="priorityLevel">Priority Level: </label>
          <select name="priorityLevel" id="priority" className="w-14">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sorting;
