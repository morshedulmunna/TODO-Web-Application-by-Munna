import React from "react";
import Navbar from "../Navbar/Navbar";
import TaskAddForm from "./TaskAddForm";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebaseInit";

const Todo = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;

  //
  //
  // Get Data From user
  const {
    data: tasks,
    isLoading,
    refetch,
  } = useQuery("tasks", () =>
    fetch(` http://localhost:5000/task/${email}`).then((res) => res.json())
  );
  console.log(tasks);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  //
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
            <TaskAddForm refetch={refetch} email={email} />
          </div>

          {/* SHow Todo Added Data */}
          {/**/}

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg border-t-2 mt-5 w-[70%] mx-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3  text-[17px] text-white "
                  >
                    Task Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-[17px]  text-white">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <>
                    <tr className=" dark:bg-gray-800 ">
                      <td className="px-6 py-4 font-medium text-white ">
                        {task.taskName}
                      </td>
                      <td className="px-6 py-4 text-white">
                        {" "}
                        {task.taskDetails}
                      </td>
                      <td className=" py-4 float-right pr-5">
                        <button className="bg-green-600 text-white px-2 font-bold">
                          Done
                        </button>
                        <button className="ml-12 bg-red-600 text-white px-2 font-bold">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
