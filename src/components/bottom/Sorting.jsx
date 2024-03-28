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
          <label for="priority">Priority: </label>
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
            <option value="P_0">P_0</option>
            <option value="In P_1">P_1</option>
            <option value="P_2">P_2</option>
            <option value="P_3">P_3</option>
            <option value="P_4">P_4</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sorting;
