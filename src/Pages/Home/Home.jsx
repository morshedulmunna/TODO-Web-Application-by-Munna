import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase/firebaseInit";

const Home = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  if (user) {
    navigate("/todo");
  }

  return (
    <>
      <div>
        <div className="h-[100vh] flex justify-center items-center flex-col">
          <Link
            onClick={() => signInWithGoogle()}
            to="/"
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l  focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg  px-5 py-6 text-center mr-2 mb-2 text-4xl"
          >
            Explore Todo App
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
