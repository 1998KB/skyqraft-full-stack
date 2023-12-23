import { useEffect } from "react";
import { postLocation, getAllLocations } from "../client/client";
import { LocationType } from "../assets/dataTypes";
import { useAppContext } from "../context/AppContext";

export const useDataFetching = () => {
  const { setIsLoading, setAllLocations, setLatLngCurrentLocation } =
    useAppContext();
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
};
