import React from "react";
import Navbar from "../Navbar/Navbar";

const Todo = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#111827",
        }}
        className="h-[100vh] "
      >
        <Navbar />

        {/* Input Fild */}
        <div className="container lg:container md:container mx-auto">
          <div className=" w-1/2 mx-auto">
            <div>
              <label
                for="last_name"
                class="block mb-2 text-sm font-medium dark:text-gray-300 text-white"
              >
                Last name
              </label>
              <input
                type="text"
                id="task_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your Task Name"
                required
              />
            </div>

            <div>
              <label
                for="message"
                class="block mb-2 text-sm font-medium dark:text-gray-400 text-white mt-3"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="2"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="button"
              class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l  focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg  px-5 py-3.5 text-center w-full mt-5 text-lg font-bold"
            >
              Add New Task
            </button>
          </div>

          {/* SHow Todo Added Data */}
          {/**/}

          <div class="relative overflow-x-auto shadow-md sm:rounded-lg border-t-2 mt-5 w-[70%] mx-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3  text-[17px] text-white ">
                    Task Name
                  </th>
                  <th scope="col" class="px-6 py-3 text-[17px]  text-white">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class=" dark:bg-gray-800 ">
                  <td class="px-6 py-4 font-medium text-white ">
                    Apple MacBook Pro 17"
                  </td>
                  <td class="px-6 py-4 text-white">Sliver</td>
                  <td class=" py-4 float-right pr-5">
                    <button className="bg-green-600 text-white px-2 font-bold">
                      Done
                    </button>
                    <button className="ml-12 bg-red-600 text-white px-2 font-bold">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
