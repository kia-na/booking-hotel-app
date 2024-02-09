import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";
import { useHotels } from "../context/HotelsProvider";
import { useEffect } from "react";

function SingleHotel() {
  const { id } = useParams();

  const { getCurrentHotel, currentHotelData, isLoadingCurrHotel } = useHotels();

  useEffect(() => {
    getCurrentHotel(id);
  }, [id]);

  console.log(currentHotelData);
  if (isLoadingCurrHotel || !currentHotelData) return <Loader />;
  return (
    <div className="flex flex-col items-center justify-center lg:block">
      <h2 className="">{currentHotelData?.name}</h2>
      <div className="mb-2 text-slate-400">
        {currentHotelData.number_of_reviews} reviews &bull;
        {currentHotelData?.smart_location}
      </div>
      <img
        src={currentHotelData?.picture_url?.url}
        alt={currentHotelData?.name}
        className="rounded-2xl w-[70%] max-w-[35rem] h-[70%] max-h-[20rem]"
      />
    </div>
  );
}

export default SingleHotel;
