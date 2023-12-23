import { useEffect, useState } from "react";
import { postLocation, getAllLocations } from "../client/client";
import { LocationType } from "../assets/dataTypes";

export const useDataFetching = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [latLngCurrentLocation, setLatLngCurrentLocation] = useState({
    lat: 0,
    lng: 0,
  });
  const [allLocations, setAllLocations] = useState<LocationType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const currentLocation: LocationType = await postLocation();
        const allLocations: LocationType[] = await getAllLocations();
        setAllLocations(allLocations);
        setLatLngCurrentLocation({
          lat: currentLocation.coordinates.lat,
          lng: currentLocation.coordinates.lng,
        });
      } catch (error) {
        console.error("Error fetching location:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { isLoading, latLngCurrentLocation, allLocations };
};
