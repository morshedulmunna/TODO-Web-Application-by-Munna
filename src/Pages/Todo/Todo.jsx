import React from "react";
import Navbar from "../Navbar/Navbar";
import TaskAddForm from "./TaskAddForm";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebaseInit";
import TableItem from "./TableItem";

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
        className="h-[100%] "
      >
        <Navbar />

        {/* Input Fild */}

        <div className="container lg:container md:container mx-auto">
          <div className=" w-1/2 mx-auto">
            <TaskAddForm refetch={refetch} email={email} />
          </div>

          {/* SHow Todo Added Data */}
          {/**/}

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg border-t-2 mt-5 lg:w-[70%] w-full mx-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
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
                {tasks.map((task, index) => (
                  <TableItem
                    key={task._id}
                    index={index}
                    refetch={refetch}
                    task={task}
                  />
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
