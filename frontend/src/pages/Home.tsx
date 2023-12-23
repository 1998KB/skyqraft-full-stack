import React, { useEffect, useState } from "react";
import { GoogleMaps } from "../components/googleMaps/GoogleMaps";
import { ByDate } from "../components/filters/ByDate";
import { ByLocation } from "../components/filters/ByLocation";
import { europeanCountries, markerLegend } from "../assets/data";
import { LoadingSpinner } from "../components/LoaderSpinner";
import { useDataFetching } from "../hooks/useDataFetching";
import { MarkerLegend } from "../components/MarkerLegenda";
import TotalAccessDisplay from "../components/TotalAccessDisplay";

export const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState(europeanCountries[0]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [allTimes, setAllTimes] = useState<boolean>(true);
  const [totalAccess, setTotalAccess] = useState<number | undefined>(undefined);

  const { isLoading, latLngCurrentLocation, allLocations } = useDataFetching();

  return (
    <div className="w-full flex flex-col justify-center items-center gap-6 bg-black h-screen text-white">
      <div className=" absolute left-4 top-4 ">
        <h1 className=" text-4xl font-bold ">Skyqraft</h1>
        <h2 className=" text-2xl ">Coding Test</h2>
      </div>
      <div className="absolute top-0 m-4 flex gap-8">
        <ByLocation
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
        <ByDate
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          setAllTimes={setAllTimes}
          allTimes={allTimes}
        />
      </div>
      <TotalAccessDisplay
        selectedCountry={selectedCountry}
        isLoading={isLoading}
        totalAccess={totalAccess}
        selectedDate={selectedDate}
        allTimes={allTimes}
      />
      <div
        className="w-2/3 flex justify-center items-center"
        style={{ height: "35em" }}
      >
        {isLoading ? (
          <LoadingSpinner size="big" />
        ) : (
          <GoogleMaps
            selectedCountry={selectedCountry}
            setTotalAccess={setTotalAccess}
            allLocations={allLocations}
            latLng={latLngCurrentLocation}
            selectedDate={selectedDate}
            allTimes={allTimes}
            setAllTimes={setAllTimes}
          />
        )}
      </div>
      <MarkerLegend markerLegend={markerLegend} />
    </div>
  );
};
