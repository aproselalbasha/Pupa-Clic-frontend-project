import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglemenu } from "./Utils/appslice";
import { Youtube_Search_API } from "./Utils/Constant";
import store from "./Utils/store";
import { cacheresult } from "./Utils/searchslice";

const Head = () => {
  const seachcache = useSelector((store) => store.search);
  const [searchdata, setsearchdata] = useState("");
  const [suggestion, setsuggestion] = useState([]);
  const [showsuggestion, setshowsuggestion] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (seachcache[searchdata]) {
        setsuggestion(seachcache[searchdata]);
      } else {
        youtubesearch();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchdata]);
  async function youtubesearch() {
    const searchapi = await fetch(Youtube_Search_API + searchdata);
    const jsondata = await searchapi.json();
    setsuggestion(jsondata[1]);
    dispatch(
      cacheresult({
        [searchdata]: jsondata[1],
      })
    );
  }

  const dispatch = useDispatch();
  const togglemenuhandler = () => {
    dispatch(togglemenu());
  };
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-lg z-50  ">
      <div className="  grid grid-flow-col   shadow-lg shadow-gray-400 mt-4 mb-4 h-14  ">
        <div className="flex  col-span-1 ">
          <img
            onClick={() => togglemenuhandler()}
            className="h-12 cursor-pointer"
            src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
            alt="hamburger icon"
          />

          <div>
            
            <img 
              className="h-12 "
              src="https://cdn-icons-png.flaticon.com/512/3781/3781746.png"
              alt="youtubelogo"
              onClick={() => (window.location.href = "/")} 
            />
          </div>
        </div>
        <div className=" col-span-10 mt-2">
          <input
            type="text"
            className=" border border-gray-500 w-2/4  rounded-l-lg py-2 px-2"
            value={searchdata}
            onChange={(e) => {
              setsearchdata(e.target.value);
            }}
            onFocus={() => {
              setshowsuggestion(true);
            }}
            onBlur={() => {
              setshowsuggestion(false);
            }}
          />

          <button className="border border-gray-500 rounded-r-lg py-2 px-2">
            search
          </button>
          {showsuggestion && (
            <div className="fixed bg-white w-[38.8%] px-4 py-2 shadow-lg rounded-lg border border-gray-100 ">
              <ul>
                {suggestion.map((s) => (
                  <li key={s} className=" hover:bg-gray-200 cursor-pointer">
                    🔎 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="col-span-1">
          <img
            className="h-10 "
            src="https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg"
            alt="usericon"
          />
        </div>
      </div>
    </div>
  );
};

export default Head;
