import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const ismenuopen = useSelector((store) => store.app.ismenuopen);
  if (!ismenuopen) return null;
  return (
    <div className=" shadow-xl pr-12">
      <div className="">
        <ul className="my-3">
        
          <Link to={"/"}>
            <li>HOME</li>
          </Link>
          <li>SHORTS</li>
          <li>youtube music</li>
          <li>Downloads</li>
        </ul>

        <div>
          <ul>
            <li className="font-bold">Explore</li>
            <li>tadnding</li>
            <li>shopping</li>
            <li>Music</li>
          </ul>
        </div>
      </div>
      <div className="mt-2">
        <ul>
          <li className="font-bold">Subscription</li>
          <li>Music</li>
          <li>Game</li>
          <li>sports</li>
        </ul>
      </div>
      <div className="mt-2">
        <ul>
          <li className="font-bold">Subscription</li>
          <li>Music</li>
          <li>Game</li>
          <li>sports</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
