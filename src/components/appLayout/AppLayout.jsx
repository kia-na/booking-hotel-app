import { Outlet } from "react-router-dom";
import Map from "../map/Map";
import { useHotels } from "../context/HotelsProvider";
import Loader from "../loader/Loader";

function AppLayout() {
  const { data, loading } = useHotels();
  return (
    <div className="max-w-[120rem]  min-h-[50rem] mx-auto lg:w-[95%] mt-6 flex justify-between">
      <div className="w-1/2 lg:w-[48%] pl-1">
        <Outlet />
      </div>
      <div className="w-1/2  bg-slate-300 rounded-2xl ">
        {loading ? <Loader /> : <Map locationsMark={data} />}
      </div>
    </div>
  );
}

export default AppLayout;
