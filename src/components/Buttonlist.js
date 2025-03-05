import React from "react";
import Buttons from "./Utils/Buttons";

const Buttonlist = () => {
  const buttonnames = [
    "ALL",
    "LIVE",
    "News",
    "Music",
    "podcaste",
    "Gameing",
    "Eductaion",
    "Tamilcinima",
    "unboxing",
  ];
  return (
    <div className="flex ">
      {buttonnames.map((list, index) => (
        <Buttons btnname={list} key={index} />
      ))}
    </div>
  );
};

export default Buttonlist;
