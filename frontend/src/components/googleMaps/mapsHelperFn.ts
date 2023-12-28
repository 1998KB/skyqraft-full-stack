import { LocationType } from "../../assets/dataTypes";
import { filterByDate, filterByLocation } from "../utils/helperFn";

export const getFormattedDate = (timestamp: any) => {
  const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1e6);
  return date;
};

export const getFilteredLocations = (
  selectedCountry: LocationType,
  allLocations: LocationType[],
  selectedDate: Date,
  allTimes: boolean
) => {
  const mapOptions = getCountryMapOptions(
    selectedCountry.country === "Europe" ? 4 : 5,
    selectedCountry.coordinates
  );

  if (selectedCountry.country === "Europe") {
    if (allTimes) {
      return {
        filteredLocations: allLocations,
        mapOptions,
      };
    } else {
      const europeFilteredLocations = filterByDate(allLocations, selectedDate);
      return {
        filteredLocations: europeFilteredLocations,
        mapOptions,
      };
    }
  } else {
    if (allTimes) {
      const countryFilteredLocations = filterByLocation(
        allLocations,
        selectedCountry.country
      );
      return {
        filteredLocations: countryFilteredLocations,
        mapOptions,
      };
    } else {
      const countryFilteredLocations = filterByDate(
        filterByLocation(allLocations, selectedCountry.country),
        selectedDate
      );
      return {
        filteredLocations: countryFilteredLocations,
        mapOptions,
      };
    }
  }
};

export const isToday = (timestamp: any): boolean => {
  if (!timestamp) return false;

  const date = getFormattedDate(timestamp);
  const today = new Date();

  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

const getCountryMapOptions = (
  zoom: number,
  center: { lat: number; lng: number }
) => ({
  mapTypeControl: false,
  streetViewControl: false,
  keyboardShortcuts: false,
  restriction: {
    latLngBounds: {
      north: 85,
      south: -85,
      west: -180,
      east: 180,
    },
  },
  zoom,
  center,
});
