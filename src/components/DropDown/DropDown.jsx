/* eslint-disable react/prop-types */

import { useRef } from "react";
import useOutsideClick from "./hooks/useOutsideClick";

export default function DropDown({ data, setData, setOpenOption }) {
  const optionRef = useRef();

  useOutsideClick(optionRef, setOpenOption);
  return (
    <div
      ref={optionRef}
      className="bg-gray-50 absolute w-[11rem] sm:w-[11.2rem] xl:w-[12.4rem] px-3 rounded-2xl shadow-dropdown top-8 lg:px-4"
    >
      <DropDownItem
        name="adult"
        maxCount={data.adult}
        setData={setData}
        data={data}
      />
      <DropDownItem
        name="children"
        maxCount={data.children}
        setData={setData}
        data={data}
      />
      <DropDownItem
        name="room"
        maxCount={data.room}
        setData={setData}
        data={data}
      />
    </div>
  );
}

function DropDownItem({ name, setData, data }) {
  function handleInc() {
    setData((prev) => {
      return {
        ...prev,
        [name]: data[name] + 1,
      };
    });
  }
  function handleDec() {
    setData((prev) => {
      return {
        ...prev,
        [name]: data[name] - 1 < 0 ? data[name] : data[name] - 1,
      };
    });
  }

  return (
    <div className="flex justify-between items-center my-4 lg:my-5">
      <span className="text-gray-800">{name}</span>
      <span className="w-1/2 flex items-center justify-between">
        <span
          onClick={handleInc}
          className="bg-slate-200 w-[1.8rem] py-[2px] lg:py-[4px] flex items-center justify-center rounded-md cursor-pointer"
        >
          +
        </span>
        <span className="w-[1.8rem] py-[2px] lg:py-[4px] flex items-center justify-center rounded-md text-gray-800">
          {data[name]}
        </span>
        <span
          onClick={handleDec}
          className="bg-slate-200 w-[1.8rem] py-[2px] lg:py-[4px] flex items-center justify-center rounded-md cursor-pointer"
        >
          -
        </span>
      </span>
    </div>
  );
}
