import { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import { Toaster, toast } from "sonner";
function App() {
  const [tasks, setTask] = useState([]);
  const [TaskValue, setTaskValue] = useState("");
  // insert tasks to LocalStorage
  const ToLocal = (newTask) => {
    localStorage.setItem("tasks", JSON.stringify({ tasks: newTask }));
  };
  // handle Value From input
  const handlInput = (newTask) => {
    const newTasksList = [...tasks, newTask];
    setTask(newTasksList);
    ToLocal(newTasksList);
    toast.success("Task has been created");
  };
  <Toaster richColors />;
  // Delete Function
  const handlDeleteTask = (index) => {
    const newTaskList = tasks.filter((task, indexOfTask) => {
      return indexOfTask !== index;
    });
    setTask(newTaskList);
    ToLocal(newTaskList);
    
  };
  // Update Function
  const HandlUpdateTask = (index) => {
    setTaskValue(tasks[index]);
    handlDeleteTask(index);
  };
  // Check localStorage
  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let LocalTasks = localStorage.getItem("tasks");
    if (!LocalTasks) {
      return;
    }
    LocalTasks = JSON.parse(LocalTasks).tasks;
    setTask(LocalTasks);
  }, []);

  return (
    <div className=" container mx-auto size-3/4 ">
      <TodoInput
        handlInput={handlInput}
        handlDeleteTask={handlDeleteTask}
        TaskValue={TaskValue}
        setTaskValue={setTaskValue}
      />
      <TodoList
        Tasks={tasks}
        handlDeleteTask={handlDeleteTask}
        HandlUpdateTask={HandlUpdateTask}
      />
    </div>
  );
}

export default App;
