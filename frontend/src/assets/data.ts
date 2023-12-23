import { LocationType, MarkerLegendType } from "./dataTypes";

export const europeanCountries: LocationType[] = [
  {
    country: "Europe",
    coordinates: { lat: 51.1657, lng: 10.4515 },
  },
  {
    country: "Germany",
    coordinates: { lat: 51.1657, lng: 10.4515 },
  },
  {
    country: "France",
    coordinates: { lat: 46.6035, lng: 1.8883 },
  },
  {
    country: "United Kingdom",
    coordinates: { lat: 55.3781, lng: -3.436 },
  },
  {
    country: "Italy",
    coordinates: { lat: 41.8719, lng: 12.5674 },
  },
  {
    country: "Spain",
    coordinates: { lat: 40.4637, lng: -3.7492 },
  },
  {
    country: "Netherlands",
    coordinates: { lat: 52.1326, lng: 5.2913 },
  },
  {
    country: "Belgium",
    coordinates: { lat: 50.8503, lng: 4.3517 },
  },
  {
    country: "Switzerland",
    coordinates: { lat: 46.8182, lng: 8.2275 },
  },
  {
    country: "Austria",
    coordinates: { lat: 47.5162, lng: 14.5501 },
  },
  {
    country: "Sweden",
    coordinates: { lat: 60.1282, lng: 18.6435 },
  },
];

export const markerLegend: MarkerLegendType[] = [
  {
    iconUrl: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
    label: "Your Location",
  },
  {
    iconUrl: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
    label: "Today's accesses",
  },
  {
    iconUrl: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
    label: "Other accesses",
  },
];
