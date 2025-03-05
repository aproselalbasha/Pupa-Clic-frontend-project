import React from "react";

const commenddata = [
  {
    name: "APROSE",
    commend:
      "Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts1",
    replies: [
      {
        name: "APROSE",
        commend:
          "Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts1",
        replies: [],
      },
    ],
  },
  {
    name: "APROSE",
    commend:
      "Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts1",
    replies: [
      {
        name: "APROSE",
        commend:
          "Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts1",
        replies: [],
      },
    ],
  },
  {
    name: "APROSE",
    commend:
      "Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts1",
    replies: [
      {
        name: "APROSE",
        commend:
          "Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts1",
        replies: [],
      },
    ],
  },
  {
    name: "APROSE",
    commend:
      "Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts1",
    replies: [
      {
        name: "APROSE",
        commend:
          "Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts1",
        replies: [],
      },
    ],
  },
  {
    name: "APROSE",
    commend:
      "Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts1",
    replies: [
      {
        name: "APROSE",
        commend:
          "Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts1",
        replies: [],
      },
    ],
  },
  {
    name: "APROSE",
    commend:
      "Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts1",
    replies: [
      {
        name: "APROSE",
        commend:
          "Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts1",
        replies: [
          {
            name: "APROSE",
            commend:
              "Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts1",
            replies: [],
          },
        ],
      },
    ],
  },
];

const Cmd = ({ data }) => {
  const { name, commend, replies } = data;
  return (
    <div className="flex border bg-gray-200 mt-4">
      <img
        src="https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg"
        alt="usericon"
        className="h-10"
      />
      <div className="flex flex-col text-sm ">
        <p>{name}</p>
        <p>{commend}</p>
      </div>
    </div>
  );
};
const Commendlist = ({ cmdata }) => {
  return cmdata.map((cmddata, index) => (
    <div>
      <Cmd key={index} data={cmddata} />
      {cmddata.replies && cmddata.replies.length > 0 && (
        <div className="pl-5 border-l-2 border-black ml-5">
          <Commendlist cmdata={cmddata.replies} />
        </div>
      )}
      {/* <div className="pl-5 border border-l-black ml-5">
        <Commendlist cmdata={cmdata.replies} />
      </div> */}
    </div>
  ));
};
const Commends = () => {
  return (
    <div className="m-5 p-2">
      <div className=" font-bold text-xl">Commends:</div>
      <Commendlist cmdata={commenddata} />
    </div>
  );
};

export default Commends;
