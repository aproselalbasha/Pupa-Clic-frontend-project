import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "./Utils/Constant";
import Videocard, { Addvideocard } from "./Videocard";
import { Link } from "react-router-dom";

const Videocontainer = () => {
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    getvideo();
  }, []);

  const getvideo = async () => {
    const data = await fetch(YOUTUBE_API);
    const jsondata = await data.json();

    setvideos(jsondata.items);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 ">
  {videos[0] && <Addvideocard info={videos[0]} className="col-span-1" />}
  {videos.map((vid) => (
    <Link to={"/watch?v=" + vid.id} key={vid.id}>
      <Videocard info={vid} />
    </Link>
  ))}
</div>

  );
};

export default Videocontainer;
