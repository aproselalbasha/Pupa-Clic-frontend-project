import React from "react";

const Videocard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="shadow-lg w-72 p-2 m-2 bg-gray-200 hover:scale-110">
      <img
        src={thumbnails.medium.url}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <ul>
        <li className="font-bold text-lg">{title}</li>
        <li className="text-sm text-gray-600">{channelTitle}</li>
        <li>{viewCount.toLocaleString()} Views</li>
      </ul>
    </div>
  );
};

export const Addvideocard = ({ info }) => {
  return (
    <div className="border-2 border-dotted border-gray-600 ">
      <Videocard info={info} />
      <h3 className="text-center bg-slate-200">advertisement</h3>
    </div>
  );
};
export default Videocard;
