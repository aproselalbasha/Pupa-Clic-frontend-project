import React from "react";

const Chatmsg = ({ name, msg }) => {
  return (
    <div className="col-span-1 flex shadow-sm rounded-lg ">
      <img
        className="h-10"
        src="https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg"
        alt="usericon"
      />
      <span className="ml-1 mt-2">
        <span className="font-bold pr-2 ">{name}:</span>
        {msg}
      </span>
    </div>
  );
};

export default Chatmsg;
