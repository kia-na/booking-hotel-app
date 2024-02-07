import React from "react";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="max-w-[120rem] mx-auto w-[80%] bg-red-500 mt-6 flex ">
      <div className="w-1/2">
        <Outlet />
      </div>
      <div className="w-1/2">Map</div>
    </div>
  );
}

export default AppLayout;
