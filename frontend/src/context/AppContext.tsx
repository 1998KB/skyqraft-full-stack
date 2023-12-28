import React, { createContext, useContext, useState, ReactNode } from "react";
import { LocationType } from "../assets/dataTypes";
import { europeanCountries } from "../assets/data";
import { AppContextProps } from "../assets/props";

export const AppContext = createContext<AppContextProps>({
  selectedCountry: europeanCountries[0],
  setSelectedCountry: () => {},
  selectedDate: new Date(),
  setSelectedDate: () => {},
  allTimes: true,
  setAllTimes: () => {},
  totalAccess: 0,
  setTotalAccess: () => {},
  isLoading: true,
  setIsLoading: () => {},
  latLngCurrentLocation: { lat: 0, lng: 0 },
  setLatLngCurrentLocation: () => {},
  allLocations: [],
  setAllLocations: () => {},
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCountry, setSelectedCountry] = useState<LocationType>(
    europeanCountries[0]
  );
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [allTimes, setAllTimes] = useState<boolean>(true);
  const [totalAccess, setTotalAccess] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [latLngCurrentLocation, setLatLngCurrentLocation] = useState({
    lat: 0,
    lng: 0,
  });
  const [allLocations, setAllLocations] = useState<LocationType[]>([]);

  const contextValue: AppContextProps = {
    selectedCountry,
    setSelectedCountry,
    selectedDate,
    setSelectedDate,
    allTimes,
    setAllTimes,
    totalAccess,
    setTotalAccess,
    isLoading,
    setIsLoading,
    latLngCurrentLocation,
    setLatLngCurrentLocation,
    allLocations,
    setAllLocations,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = (): AppContextProps => {
  return useContext(AppContext);
};
