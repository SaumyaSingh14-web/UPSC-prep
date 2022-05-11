import React from "react";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

function App() {
  return (
    <div className="bg-teal-800 h-screen p-20">
      <div className="bg-white min-h-full rounded-sm">
        <Login />
      </div>
    </div>
  );
}

export default App;
