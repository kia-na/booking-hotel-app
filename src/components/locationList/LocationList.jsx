import React from "react";
import LocationCard from "../locationCard/LocationCard";

import useFetch from "../../../utilities/useFetch/useFetch";
import Loader from "../loader/Loader";

function LocationList() {
  const { data, isLoading } = useFetch("");
  console.log(data, isLoading);
  // console.log(fff);

  if (isLoading) return <Loader />;

  return (
    <div className="max-w-[120rem] mx-auto">
      <span className="w-[80%] max-w-[84rem] mx-auto text-left mt-4 mb-2 block font-bold sm:text-xl lg:mt-6">
        Nearby Location
      </span>
      <div className="flex items-start justify-center flex-wrap gap-2 lg:gap-4 lg:w-[80%] mx-auto">
        {data?.map((location) => (
          <LocationCard key={location.id} {...location} />
        ))}
      </div>
    </div>
  );
}

export default LocationList;
