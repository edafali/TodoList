import React, { useState } from "react";
import { Toaster, toast } from "sonner";
export default function TodoInput({ handlInput, TaskValue, setTaskValue }) {
  function notify() {
    toast.warning("Please enter your task");
  }

  return (
    <>
      <h1 className="text-4xl font-bold text-success font-">To do List App</h1>
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
          TaskValue !== "" ? handlInput(TaskValue) : notify();
          setTaskValue("");
        }}
      >
        Add Task
      </button>
      <Toaster richColors position="top-right" />
    </>
  );
}
