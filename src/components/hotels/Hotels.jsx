import { Link } from "react-router-dom";
import Loader from "../loader/Loader";
import { useHotels } from "../context/HotelsProvider";

function Hotels() {
  const { data, isLoading, currentHotelData } = useHotels();

  if (isLoading) return <Loader />;
  return (
    <div className=" h-[49.99rem]">
      <h2 className="font-bold md:text-xl lg:text-2xl lg:mb-3 mb-3">
        Search Results ({data.length})
      </h2>
      <div className="overflow-y-scroll h-[46.8rem]">
        <div className="flex flex-col gap-3 mt-3 mb-3">
          {data.map((item) => (
            <Link
              key={item.id}
              to={`/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
              className={`flex items-start mx-2 justify-start gap-3 border-slate-700 rounded-3xl ${
                currentHotelData?.id === item.id ? "shadow-blueShadowSm " : ""
              }`}
            >
              <img
                src={item.picture_url.url}
                alt={item.name}
                className="w-[5rem] h-[4.5rem] lg:w-[8rem] lg:h-[7rem] lg:rounded-[1.2rem] bg-slate-300 rounded-[.8rem]"
              />
              <div className="">
                <span className="text-gray-500 text-sm lg:text-[1.1rem]">
                  {item.smart_location}
                </span>
                <br />
                <span className="text-xs lg:text-[.9rem] text-slate-400">
                  {item.name}
                </span>
                <br />
                <span className="text-xs text-slate-600 lg:text-[1rem]">
                  € ${item.price} night
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hotels;
