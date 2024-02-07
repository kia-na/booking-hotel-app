import React from "react";
import LocationCard from "../locationCard/LocationCard";

import useFetch from "../../../utilities/useFetch/useFetch";

function LocationList() {
  const { data, isLoading } = useFetch("");
  console.log(data, isLoading);
  // console.log(fff);

  if (isLoading) return <div>is loading...</div>;
  return (
    <div className="flex items-start justify-center flex-wrap mt-8">
      <span className="w-full text-left">Nearby Location</span>
      {data?.map((location) => (
        <LocationCard key={location.id} {...location} />
      ))}
    </div>
  );
}

export default LocationList;
