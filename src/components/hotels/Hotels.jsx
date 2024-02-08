import { Link } from "react-router-dom";
import Loader from "../loader/Loader";
import { useHotels } from "../context/HotelsProvider";

function Hotels() {
  const { data, isLoading } = useHotels();

  if (isLoading) return <Loader />;
  return (
    <div className=" h-[49.99rem]">
      <h2 className="font-bold md:text-xl lg:text-2xl lg:mb-5 mb-3">
        Search Results ({data.length})
      </h2>
      <div className="overflow-y-scroll h-[46.8rem]">
        <div className="flex flex-col gap-3">
          {data.map((item) => (
            <Link
              key={item.id}
              to={`/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
              className="flex items-start justify-start gap-3"
            >
              <img
                src={item.picture_url.url}
                alt={item.name}
                className="w-[5rem] h-[4.5rem] lg:w-[8rem] lg:h-[7rem] lg:rounded-[1.2rem] bg-slate-300 rounded-[.8rem]"
              />
              <div className="">
                <span className="font-bold text-sm lg:text-[1.2rem]">
                  {item.smart_location}
                </span>
                <br />
                <span className="text-xs lg:text-[1rem] text-slate-500">
                  {item.name}
                </span>
                <br />
                <span className="text-xs lg:text-[1rem]">
                  <strong>€ ${item.price} </strong>
                  night
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
