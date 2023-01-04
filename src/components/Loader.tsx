import React from "react";
import { SpinnerCircularFixed } from "spinners-react";

const Loader = () => {
  return (
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <SpinnerCircularFixed color="#ffdd2d" size={40} speed={250} />
    </div>
  );
};

export default Loader;
