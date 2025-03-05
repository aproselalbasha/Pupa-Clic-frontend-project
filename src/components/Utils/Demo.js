import React, { useMemo, useState } from "react";
import { findNthPrime } from "./Helper";

const Demo = () => {
  const [dark, setdark] = useState(false);
  const [text, settext] = useState();
  const primenum = useMemo(() => findNthPrime(text), [text]);

  return (
    <div className="mt-2 ml-2 ">
      <div
        className={`h-96 w-96  border border-black ml-5 mt-3 bg-slate-200 ${
          dark ? " text-white bg-black" : ""
        } `}
      >
        <button
          className=" relative bottom-14  border border-black"
          onClick={(e) => {
            setdark(!dark);
          }}
        >
          Tougle
        </button>
        <input
          type="number"
          className=" border border-black mt-16 ml-5"
          onChange={(e) => settext(e.target.value)}
        />
        <button className="ml-2 border border-black p-0.5">SUBMIT</button>
        <p className="ml-5">{primenum}</p>
      </div>
    </div>
  );
};

export default Demo;
