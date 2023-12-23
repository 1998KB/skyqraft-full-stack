import { LocationType } from "../../assets/dataTypes";

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
  const baseMapOptions = getCountryMapOptions(
    selectedCountry.country === "Europe" ? 4 : 5,
    selectedCountry.coordinates
  );

  if (selectedCountry.country === "Europe") {
    if (allTimes) {
      return {
        filteredLocations: allLocations,
        mapOptions: baseMapOptions,
      };
    } else {
      const europeFilteredLocations = filterByDate(allLocations, selectedDate);
      return {
        filteredLocations: europeFilteredLocations,
        mapOptions: baseMapOptions,
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
        mapOptions: baseMapOptions,
      };
    } else {
      const countryFilteredLocations = filterByDate(
        filterByLocation(allLocations, selectedCountry.country),
        selectedDate
      );
      return {
        filteredLocations: countryFilteredLocations,
        mapOptions: baseMapOptions,
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

const filterByLocation = (locations: LocationType[], country: string) =>
  locations.filter((location) => location.country === country);

const filterByDate = (locations: LocationType[], selectedDate: Date) =>
  locations.filter(
    (location) =>
      getFormattedDate(location.timestamp).toDateString() ===
      selectedDate.toDateString()
  );
