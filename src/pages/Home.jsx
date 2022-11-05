import React from "react";
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
}

export default Home;
