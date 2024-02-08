import { useState } from "react";

function useGeoLocation() {
  const [isGeoLoading, setIsGeoLoading] = useState(false);
  const [geoPosition, setGeoPosition] = useState({});
  const [err, setErr] = useState("");

  function getGeoLocation() {
    if (!navigator.geolocation) {
      setErr("Your browser don NOT support geolocation!");
    }

    setIsGeoLoading(true);
    navigator.geolocation.getCurrentPosition(
      (success) => {
        setGeoPosition({
          lat: success.coords.latitude,
          lng: success.coords.longitude,
        });
        setIsGeoLoading(false);
      },
      (fail) => {
        setErr(fail.message);
        setIsGeoLoading(false);
      }
    );
  }

  return { isGeoLoading, geoPosition, err, getGeoLocation };
}

export default useGeoLocation;
