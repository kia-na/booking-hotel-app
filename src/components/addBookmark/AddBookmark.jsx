import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loader from "../loader/Loader";
import { useBookmark } from "../context/BookmarkContext";
const REVERSE_GEAOCODE_URL =
  "https://api.bigdatacloud.net/data/reverse-geocode-client";

function AddBookmark() {
  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchParams] = useSearchParams();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  useEffect(() => {
    if (!lat || !lng) return;
    async function getGeocode() {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `${REVERSE_GEAOCODE_URL}?latitude=${lat}&longitude=${lng}`
        );
        console.log(data);
        if (!data.countryCode) {
          throw new Error(
            "This location is NOT a city please select somewhere else!"
          );
        }
        setLocation(data);
        setIsLoading(false);
        setError("");
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    }
    getGeocode();
  }, [lat, lng]);

  const { addNewBookmark } = useBookmark();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    const newBookmark = {
      cityName,
      country,
      countryCode: location.countryCode,
      latitude: lat,
      longitude: lng,
      host_location: cityName + " " + country,
    };
    addNewBookmark(newBookmark);
    navigate(`/bookmarks`);
  }

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <p className="font-extralight underline">{error}</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3 className="font-bold text-lg md:text-[1.5rem] mb-3">
        Bookmark New Location
      </h3>
      <div className="flex flex-col items-start justify-between gap-1 mb-3">
        <span className="font-extralight">City Name</span>
        <input
          type="text"
          defaultValue={location?.city || data?.locality}
          onChange={(e) => setCityName(e.target.value)}
          className="bg-inherit w-full py-1 px-2 font-extralight text-slate-600 outline-none rounded-lg border-[1px] border-slate-600"
        />
      </div>
      <div className="relative flex flex-col items-start justify-between gap-1">
        <span className="font-extralight">Country</span>
        <input
          type="text"
          defaultValue={location?.continent}
          onChange={(e) => setCountry(e.target.value)}
          className="bg-inherit w-full py-1 px-2 font-extralight text-slate-600 outline-none rounded-lg border-[1px] border-slate-600"
        />
        <ReactCountryFlag
          svg
          countryCode={location?.countryCode}
          className="absolute bottom-[.55rem] right-4 border-[1px] border-slate-600"
        />
      </div>
      <div className="mt-4 flex justify-between items-center">
        <span className="bg-inherit py-1 px-3 cursor-pointer font-extralight text-[.9rem] border-[1px] border-slate-500 rounded-lg">
          &larr; Back
        </span>
        <button className="bg-blue-700 py-1 px-3 text-[.9rem] text-white font-extralight rounded-lg cursor-pointer">
          Add
        </button>
      </div>
    </form>
  );
}

export default AddBookmark;
