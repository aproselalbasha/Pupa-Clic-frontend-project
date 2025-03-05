import React from "react";

const Buttons = ({ btnname }) => {
  return (
    <div className="ml-3 mt-3">
      <button className=" bg-slate-200  w-28 h-6 rounded-lg mr-6">
        {btnname}
      </button>
    </div>
  );
};

export default Buttons;
