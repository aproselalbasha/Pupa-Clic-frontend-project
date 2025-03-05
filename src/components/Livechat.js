import React, { useEffect, useState } from "react";
import Chatmsg from "./Chatmsg";
import { useDispatch, useSelector } from "react-redux";
import { addmessage } from "./Utils/chatslice";
import store from "./Utils/store";
import { generaterandamname } from "./Utils/Helper";

const Livechat = () => {
  const [livechat, setslivechat] = useState();
  const dispatch = useDispatch();
  const chatmessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("api polling");
      dispatch(
        addmessage({
          name: generaterandamname(),
          message: "hello" + generaterandamname(),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className=" w-full flex flex-col-reverse h-[570px] overflow-y-scroll ">
        {chatmessages.map((m) => (
          <Chatmsg name={m.name} msg={m.message} />
        ))}
      </div>
      <form
        className=" border border-black p-1"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addmessage({
              name: "APROSE",
              message: livechat,
            })
          );
          setslivechat("");
        }}
      >
        <input
          className="w-[73%]"
          type="text"
          value={livechat}
          onChange={(e) => {
            setslivechat(e.target.value);
          }}
        />
        <button className="px-2 mx-4 bg-green-100 border border-black" o>
          Send
        </button>
      </form>
    </>
  );
};

export default Livechat;
