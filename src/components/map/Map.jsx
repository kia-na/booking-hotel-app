import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useHotels } from "../context/HotelsProvider";
import { useSearchParams } from "react-router-dom";
import useGeoLocation from "../../hooks/useGeoLocation";

import Loader from "../loader/Loader";

function Map() {
  const [mapCenter, setMapCenter] = useState([51.505, -0.09]);
  const { data, loading } = useHotels();
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const { isGeoLoading, geoPosition, getGeoLocation } = useGeoLocation();

  useEffect(() => {
    if (lat && lng) setMapCenter([lat, lng]);
  }, [lat, lng]);

  useEffect(() => {
    if (geoPosition?.lat) {
      setMapCenter([geoPosition.lat, geoPosition.lng]);
    }
  }, [geoPosition]);

  if (loading) {
    <Loader />;
  }

  return (
    <div className="h-full border-blue-600 border-[2px] shadow-blueShadow rounded-2xl overflow-hidden">
      <MapContainer
        center={mapCenter}
        zoom={13}
        scrollWheelZoom={true}
        className="h-full w-full relative"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <button
          onClick={getGeoLocation}
          className="absolute z-[1000] bottom-4 left-6 bg-blue-600 text-white px-3 pt-1 pb-[.34rem] font-bold cursor-pointer rounded-xl shadow-blueShadow"
        >
          {isGeoLoading ? "Loading..." : "Use Your Location"}
        </button>
        <ChangeCenter position={mapCenter} />
        {data.map((item) => (
          <Marker key={item.id} position={[item.latitude, item.longitude]}>
            <Popup>{item.host_location}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
}
