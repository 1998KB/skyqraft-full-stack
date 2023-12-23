import React, { createContext, useContext, useState, ReactNode } from "react";
import { LocationType } from "../assets/dataTypes";
import { europeanCountries } from "../assets/data";

interface AppContextProps {
  selectedCountry: LocationType;
  setSelectedCountry: (country: LocationType) => void;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  allTimes: boolean;
  setAllTimes: (bol: boolean) => void;
  totalAccess: number | undefined;
  setTotalAccess: (tot: number) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  latLngCurrentLocation: { lat: number; lng: number };
  setLatLngCurrentLocation: (latLng: { lat: number; lng: number }) => void;
  allLocations: LocationType[];
  setAllLocations: (allLocation: LocationType[]) => void;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCountry, setSelectedCountry] = useState<LocationType>(
    europeanCountries[0]
  );
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [allTimes, setAllTimes] = useState<boolean>(true);
  const [totalAccess, setTotalAccess] = useState<number | undefined>(undefined);
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
  const context = useContext(AppContext);
  if (!context) {
    return {
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
    };
  }
  return context;
};
