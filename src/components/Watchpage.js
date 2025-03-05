import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closemenu } from "./Utils/appslice";
import { useSearchParams } from "react-router-dom";
import Commends from "./Commends";
import Livechat from "./Livechat";

const Watchpage = () => {
  const [viddetail, setviddetail] = useState();
  const [searchparam] = useSearchParams();
  console.log(searchparam.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closemenu());
  }, [dispatch]);
  const VIDEO_DETAIL =
    " https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=" +
    searchparam.get("v") +
    "&key=AIzaSyCce7BnEwoEIdiBn2SQS6DcWmrHumACBXA";

  useEffect(() => {
    getvideodata();
  }, [searchparam]);
  const getvideodata = async () => {
    const data = await fetch(VIDEO_DETAIL);
    const jsondata = await data.json();

    setviddetail(jsondata);
  };

  const videoTitle = viddetail?.items?.[0]?.snippet?.title || "Loading...";

  return (
    <div className="w-full">
      <div>
        <div className="flex mt-4 w-full">
          <iframe
            className="w-full"
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + searchparam.get("v")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div className="border border-black 2px ml-2 w-[30%] bg-slate-100 rounded-lg">
            <Livechat />
          </div>
        </div>

        <div>{videoTitle}</div>
      </div>
      <div>
        <Commends />
      </div>
    </div>
  );
};

export default Watchpage;
