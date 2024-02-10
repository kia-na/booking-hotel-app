import { useEffect } from "react";
import { useBookmark } from "../../context/BookmarkContext";
import { useNavigate, useParams } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";
import Loader from "../../loader/Loader";

function SingleBookmark() {
  const { getCurrBookmark, currBookmark, isLoading } = useBookmark();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getCurrBookmark(id);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col gap-4">
      <span
        onClick={() => navigate(-1)}
        className="bg-inherit max-w-[5rem] py-2 px-3 cursor-pointer font-extralight text-[.9rem] border-[1px] border-slate-500 rounded-lg"
      >
        &larr; Back
      </span>
      <span className="font-bold lg:text-2xl">{currBookmark.cityName}</span>
      <div className="relative min-h-[3.5rem] flex items-center justify-between gap-2 border-[1px] border-slate-500 rounded-[1rem] py-4 px-3">
        <ReactCountryFlag svg countryCode={currBookmark.countryCode || ""} />
        <span className="font-bold">{currBookmark.cityName}</span>
        <span className="font-extralight">{currBookmark.country}</span>
      </div>
    </div>
  );
}

export default SingleBookmark;
