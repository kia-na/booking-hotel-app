/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import useFetch from "../../../utilities/useFetch/useFetch";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const BASE_URL = "http://localhost:3000/hotels/";

const hotelsContext = createContext();

function HotelsProvider({ children }) {
  const [searchParams] = useSearchParams();
  // const destination = searchParams.get("destination");
  const room = JSON.parse(searchParams.get("option"))?.room;

  // host_location_like=${destination || ""}&name_like=${destination || ""}
  const { data, isLoading } = useFetch(
    BASE_URL,
    `accommodates_gte=${room || 1}`
  );

  //GET CURRENT HOTELS VIA ID
  const [isLoadingCurrHotel, setIsLoadingCurrHotel] = useState(false);
  const [currentHotelData, setCurrHotelDataData] = useState(false);

  async function getCurrentHotel(id) {
    setIsLoadingCurrHotel(true);
    try {
      const { data } = await axios.get(`${BASE_URL}${id}`);
      setCurrHotelDataData(data);
      setIsLoadingCurrHotel(false);
    } catch (error) {
      toast.error(error.message);
      setIsLoadingCurrHotel(false);
    }
  }

  return (
    <hotelsContext.Provider
      value={{
        data,
        isLoading,
        currentHotelData,
        isLoadingCurrHotel,
        getCurrentHotel,
      }}
    >
      {children}
    </hotelsContext.Provider>
  );
}

export default HotelsProvider;

export function useHotels() {
  return useContext(hotelsContext);
}
