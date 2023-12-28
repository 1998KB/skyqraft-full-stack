import React, { useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { getFilteredLocations, isToday } from "./mapsHelperFn";
import { useAppContext } from "../../context/AppContext";
import { LoadingSpinner } from "../LoaderSpinner";
import { GoogleMapsProps } from "../../assets/props";

export const GoogleMaps = ({
  selectedDate,
  allTimes,
  setTotalAccess,
  selectedCountry,
  allLocations,
  latLngCurrentLocation,
}: GoogleMapsProps) => {
  const { isLoading } = useAppContext();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPS_API_KEY!,
  });
  const { filteredLocations, mapOptions } = getFilteredLocations(
    selectedCountry,
    allLocations,
    selectedDate,
    allTimes
  );

  useEffect(() => {
    setTotalAccess(filteredLocations!.length);
  }, [
    selectedDate,
    allTimes,
    selectedCountry,
    filteredLocations,
    setTotalAccess,
  ]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner size="big" />
      ) : (
        isLoaded && (
          <GoogleMap options={mapOptions} mapContainerClassName="map-container">
            <Marker position={latLngCurrentLocation} zIndex={50} />
            {filteredLocations!.length > 0 &&
              filteredLocations!.map((location, index) => (
                <Marker
                  icon={{
                    url: isToday(location.timestamp)
                      ? "https://maps.google.com/mapfiles/ms/icons/green-dot.png"
                      : "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
                    scaledSize: new window.google.maps.Size(20, 20),
                  }}
                  key={index}
                  position={{
                    lat: location.coordinates.lat,
                    lng: location.coordinates.lng,
                  }}
                />
              ))}
          </GoogleMap>
        )
      )}
    </>
  );
};
