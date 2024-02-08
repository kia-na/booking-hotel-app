import { createContext, useContext } from "react";
import useFetch from "../../../utilities/useFetch/useFetch";
import { useSearchParams } from "react-router-dom";

const hotelsContext = createContext();

function HotelsProvider({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const destination = searchParams.get("destination");
  const room = JSON.parse(searchParams.get("option"))?.room;

  // host_location_like=${destination || ""}&name_like=${destination || ""}
  const { data, isLoading } = useFetch(
    "http://localhost:3000/hotels",
    `accommodates_gte=${room || 1}`
  );

  return (
    <hotelsContext.Provider value={{ data, isLoading }}>
      {children}
    </hotelsContext.Provider>
  );
}

export default HotelsProvider;

export function useHotels() {
  return useContext(hotelsContext);
}
