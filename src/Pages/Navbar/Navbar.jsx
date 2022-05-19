import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebaseInit";
import { signOut } from "firebase/auth";

const Navbar = () => {
  return (
    <div>
      <nav className=" px-2 sm:px-4 py-2.5 rounded ">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/todo" className="flex items-center">
            <img src={logo} alt="" />
            <span className=" text-blue-600  text-2xl font-bold">TodoApp</span>
          </Link>
          <div>
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link
                  onClick={() => signOut(auth)}
                  to="/"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded text-xl"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
