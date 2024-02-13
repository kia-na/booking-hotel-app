import LocationCard from "../locationCard/LocationCard";

import useFetch from "../../../utilities/useFetch/useFetch";
import Loader from "../loader/Loader";

function LocationList() {
  const { data, isLoading } = useFetch();

  if (isLoading) return <Loader />;

  return (
    <div className="max-w-[120rem] mx-auto pb-5">
      <span className="w-[95%] xl:w-[86%] max-w-[95rem] mx-auto text-left mt-4 mb-2 block font-bold sm:text-xl lg:mt-6 lg:text-2xl">
        Nearby Location
      </span>
      <div className="flex items-start justify-center xl:justify-between flex-wrap gap-2 lg:gap-4 w-[95%] xl:w-[86%] mx-auto">
        {data?.map((location) => (
          <LocationCard key={location.id} {...location} />
        ))}
      </div>
    </div>
  );
}

export default LocationList;
