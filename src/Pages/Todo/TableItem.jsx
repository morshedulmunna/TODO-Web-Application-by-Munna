import React from "react";
import toast from "react-hot-toast";

const TableItem = ({ task, index, refetch }) => {
  const { taskName, taskDetails, _id, status } = task;

  const handelDelete = (id) => {
    const isConfirm = window.confirm();
    if (isConfirm) {
      fetch(`https://guarded-refuge-11671.herokuapp.com/task/${id}`, {
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
    fetch(`https://guarded-refuge-11671.herokuapp.com/task/${id}`, {
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

  return (
    <>
      <tr className=" dark:bg-gray-800 ">
        <td
          className={`px-6 py-4 font-medium text-white ${
            status && "line-through"
          } cursor-pointer`}
        >
          {taskName}
        </td>
        <td
          className={`px-6 py-4 text-white ${
            status && "line-through"
          } cursor-pointer`}
        >
          {" "}
          {taskDetails}
        </td>
        <td className=" py-4  flex items-center justify-center">
          <button
            onClick={() => handelDone(_id)}
            className="bg-green-600 text-white px-2 font-bold rounded"
          >
            Done
          </button>
          <button
            onClick={() => handelDelete(_id)}
            className="m-2 bg-red-600 text-white px-2 font-bold rounded"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableItem;
