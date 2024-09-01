import { Toaster, toast } from "sonner";
export default function TodoList({ Tasks, handlDeleteTask, HandlUpdateTask }) {
  return (
    <>
      <div className="overflow-x-auto font-bold">
        <table className="table">
          <thead className="text-lg ">
            <tr>
              <th>Tasks</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {Tasks.map((task, index) => {
              return (
                <tr key={index}>
                  <td>{task} </td>
                  <td>
                    <button
                      className="btn btn-xs btn-error"
                      onClick={() => handlDeleteTask(index)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-xs btn-warning"
                      onClick={() => HandlUpdateTask(index)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
