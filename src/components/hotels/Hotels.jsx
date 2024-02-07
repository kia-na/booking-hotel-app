import React from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../../utilities/useFetch/useFetch";
import Loader from "../loader/Loader";

function Hotels() {
  const [searchParams, setSearchParams] = useSearchParams();
  const destination = searchParams.get("destination");
  const room = JSON.parse(searchParams.get("option"))?.room;
  console.log(room);
  const { data, isLoading } = useFetch(
    `host_location_like=${destination || ""}&name_like=${
      destination || ""
    }&accommodates_gte=${room || 1}`
  );
  console.log(data);

  if (isLoading) return <Loader />;
  return <div>Hotels</div>;
}

export default Hotels;
