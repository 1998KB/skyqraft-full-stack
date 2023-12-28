import { LocationType } from "./dataTypes";

export interface AppContextProps {
  selectedCountry: LocationType;
  setSelectedCountry: (country: LocationType) => void;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  allTimes: boolean;
  setAllTimes: (bol: boolean) => void;
  totalAccess: number;
  setTotalAccess: (tot: number) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  latLngCurrentLocation: { lat: number; lng: number };
  setLatLngCurrentLocation: (latLng: { lat: number; lng: number }) => void;
  allLocations: LocationType[];
  setAllLocations: (allLocation: LocationType[]) => void;
}

export interface ByDateProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  setAllTimes: (bol: boolean) => void;
  allTimes: boolean;
}
export interface ByLocationProps {
  setSelectedCountry: (country: LocationType) => void;
  selectedCountry: LocationType;
}
export interface GoogleMapsProps {
  allLocations: LocationType[];
  totalAccess: number;
  selectedDate: Date;
  allTimes: boolean;
  selectedCountry: LocationType;
  latLngCurrentLocation: { lat: number; lng: number };
  setTotalAccess: (totalAccess: number) => void;
}
export interface ChartProps {
  allLocations: LocationType[];
  selectedDate: Date;
  allTimes: boolean;
  selectedCountry: LocationType;
}
export interface LoadingSpinnerProps {
  size: "small" | "big";
}
export interface TotalAccessDisplayProps {
  selectedCountry: LocationType;
  totalAccess: number;
  selectedDate: Date;
  allTimes: boolean;
  isLoading: boolean;
}
