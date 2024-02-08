import React from "react";
import useFetch from "../../../utilities/useFetch/useFetch";
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";

function SingleHotel() {
  const { id } = useParams();

  const { data, isLoading } = useFetch(`http://localhost:3000/hotels/${id}`);
  console.log(data);
  if (isLoading || !data) return <Loader />;
  return (
    <div className="flex flex-col items-center justify-center lg:block">
      <h2 className="font-bold ">{data?.name}</h2>
      <div className="mb-2 text-slate-600">
        {data.number_of_reviews} reviews &bull; {data?.smart_location}
      </div>
      <img
        src={data?.picture_url?.url}
        alt={data?.name}
        className="rounded-2xl w-[70%] max-w-[35rem] h-[70%] max-h-[20rem]"
      />
    </div>
  );
}

export default SingleHotel;
