import { Outlet } from "react-router-dom";
import Map from "../map/Map";

function BookmarkLayout() {
  return (
    <div className="max-w-[120rem]  min-h-[50rem] mx-auto lg:w-[95%] mt-6 flex justify-between">
      <div className="w-1/2 lg:w-[40%] pl-1">
        <Outlet />
      </div>
      <div className="w-1/2  bg-slate-300 rounded-2xl ">
        <Map />
      </div>
    </div>
  );
}

export default BookmarkLayout;
