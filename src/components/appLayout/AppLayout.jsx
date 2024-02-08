import { Outlet } from "react-router-dom";
import Map from "../map/Map";

function AppLayout() {
  return (
    <div className="max-w-[120rem] min-h-[50rem] mx-auto lg:w-[80%] mt-6 flex">
      <div className="w-1/2">
        <Outlet />
      </div>
      <div className="w-1/2 bg-slate-300 rounded-2xl">
        <Map />
      </div>
    </div>
  );
}

export default AppLayout;
