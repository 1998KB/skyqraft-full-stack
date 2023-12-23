import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { LocationType } from "../../assets/dataTypes";
import { getFilteredLocations, isToday } from "./mapsHelperFn";

interface GoogleMapsProps {
  setTotalAccess: (total: number) => void;
  selectedCountry: LocationType;
  allLocations: LocationType[];
  latLng: { lat: number; lng: number };
  selectedDate: Date;
  allTimes: boolean;
  setAllTimes: (bol: boolean) => void;
}

export const GoogleMaps = ({
  setTotalAccess,
  selectedCountry,
  allLocations,
  latLng,
  selectedDate,
  allTimes,
}: GoogleMapsProps) => {
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
    filteredLocations,
    setTotalAccess,
    selectedDate,
    allTimes,
    selectedCountry,
  ]);

  return (
    <>
      {isLoaded && (
        <GoogleMap options={mapOptions} mapContainerClassName="map-container">
          <Marker position={latLng} zIndex={50} />
          {filteredLocations!.length > 0 &&
            filteredLocations!.map((location, index) => (
              <Marker
                icon={{
                  url: isToday(location.timestamp)
                    ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                    : "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
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
      )}
    </>
  );
};
