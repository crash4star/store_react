import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex mb-10 bg-white shadow-2xl py-4 px-6">
      <div className="mr-5">
        <Link to="/">Products</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navigation;