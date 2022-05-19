import React from "react";
import toast from "react-hot-toast";
// import Loader from "../../HelpRoute/Loader";

const TaskAddForm = ({ refetch, email }) => {
  // added Task handler
  const onTaskAdded = (e) => {
    e.preventDefault();
    const taskName = e.target.taskName.value;
    const taskDetails = e.target.taskDetails.value;

    const task = {
      taskName,
      taskDetails,
      email,
    };
    // console.log(task);

    // POST Method to send task Data
    fetch("http://localhost:5000/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Task Added in the table");
          refetch();
        }
      });
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={onTaskAdded}>
        <div>
          <label
            htmlFor="task_name"
            className="block mb-2 text-sm font-medium dark:text-gray-300 text-white"
          >
            Task Name
          </label>
          <input
            type="text"
            name="taskName"
            id="task_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your Task Name"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium dark:text-gray-400 text-white mt-3"
          >
            Task Details
          </label>
          <textarea
            name="taskDetails"
            id="message"
            rows="2"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Task Details"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l  focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg  px-5 py-3.5 text-center w-full mt-5 text-lg font-bold"
        >
          Add New Task
        </button>
      </form>
    </>
  );
};

export default TaskAddForm;
