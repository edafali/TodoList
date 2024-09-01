import React, { useState } from "react";

export default function TodoInput({ handlInput, TaskValue, setTaskValue }) {
  return (
    <>
      <h1 className="text-5xl font-bold text-success font-">To do List App</h1>
      <input
        value={TaskValue}
        onChange={(e) => {
          setTaskValue(e.target.value);
        }}
        type="text"
        placeholder="Type your Task ..."
        className="input input-bordered w-full my-4 md:btn-block "
      />
      <button
        className="btn btn-success mb-3 w-full"
        onClick={() => {
          handlInput(TaskValue);
          setTaskValue("");
        }}
      >
        Add Task
      </button>
    </>
  );
}
