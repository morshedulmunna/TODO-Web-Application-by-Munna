import React from "react";
import toast from "react-hot-toast";

const TableItem = ({ task, index, refetch }) => {
  const { taskName, taskDetails, _id, status } = task;
  console.log(status);

  const handelDelete = (id) => {
    const isConfirm = window.confirm();
    if (isConfirm) {
      fetch(`http://localhost:5000/task/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Task has been deleted");
            refetch();
          }
        });
    }
  };

  const handelDone = (id) => {
    fetch(`http://localhost:5000/task/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Congratulation!! You have complete your work");
          refetch();
        }
      });
  };

  if (status) {
    return (
      <>
        <tr className=" dark:bg-gray-800 ">
          <td className="px-6 py-4 font-medium text-white line-through cursor-pointer ">
            {taskName}
          </td>
          <td className="px-6 py-4 text-white line-through"> {taskDetails}</td>
          <td className=" py-4 float-right pr-5">
            <button
              onClick={() => handelDone(_id)}
              className="bg-green-600 text-white px-2 font-bold rounded cursor-pointer"
              disabled
            >
              Done
            </button>
            <button
              onClick={() => handelDelete(_id)}
              className="ml-12 bg-red-600 text-white px-2 font-bold rounded"
            >
              Delete
            </button>
          </td>
        </tr>
      </>
    );
  }

  return (
    <>
      <tr className=" dark:bg-gray-800 ">
        <td className="px-6 py-4 font-medium text-white cursor-pointer">
          {taskName}
        </td>
        <td className="px-6 py-4 text-white cursor-pointer"> {taskDetails}</td>
        <td className=" py-4 float-right pr-5">
          <button
            onClick={() => handelDone(_id)}
            className="bg-green-600 text-white px-2 font-bold rounded"
          >
            Done
          </button>
          <button
            onClick={() => handelDelete(_id)}
            className="ml-12 bg-red-600 text-white px-2 font-bold rounded"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableItem;
