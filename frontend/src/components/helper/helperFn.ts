import { LocationType } from "../../assets/dataTypes";
import { getFormattedDate } from "../googleMaps/mapsHelperFn";

export const filterByLocation = (locations: LocationType[], country: string) =>
  locations.filter((location) => location.country === country);

export const filterByDate = (locations: LocationType[], selectedDate: Date) =>
  locations.filter(
    (location) =>
      getFormattedDate(location.timestamp).toDateString() ===
      selectedDate.toDateString()
  );
