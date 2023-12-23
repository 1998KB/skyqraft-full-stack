export type LocationType = {
  country: string;
  coordinates: { lat: number; lng: number };
  timestamp?: { seconds: number; nanoseconds: number };
};

export type MarkerLegendType = {
  iconUrl: string;
  label: string;
};
