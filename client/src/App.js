import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
// import Login from "./Pages/Login/Login";
// import Signup from "./Pages/Signup/Signup";
import RequireAuth from "./HelpRoute/RequireAuth";
import Todo from "./Pages/Todo/Todo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/todo"
          element={
            <RequireAuth>
              <Todo />
            </RequireAuth>
          }
        />
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </>
  );
}

export default App;
