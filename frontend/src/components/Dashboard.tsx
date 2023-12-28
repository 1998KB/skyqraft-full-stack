import React from "react";
import { TotalAccessDisplay } from "./TotalAccessDisplay";
import { useAppContext } from "../context/AppContext";
import { GoogleMaps } from "./googleMaps/GoogleMaps";
import { MarkerLegend } from "./MarkerLegenda";
import { Chart } from "./Chart";
import { useDataFetching } from "../hooks/useDataFetching";
import { ByLocation } from "./filters/ByLocation";
import { ByDate } from "./filters/ByDate";

export const Dashboard = () => {
  useDataFetching();
  return (
    <>
      <div className="absolute top-0 m-4 flex gap-8">
        <ByLocation {...useAppContext()} />
        <ByDate {...useAppContext()} />
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-6 mt-28">
        <TotalAccessDisplay {...useAppContext()} />
        <div
          className="w-2/3 flex justify-center items-center"
          style={{ height: "35em" }}
        >
          <GoogleMaps {...useAppContext()} />
        </div>
        <MarkerLegend />
        <Chart {...useAppContext()} />
      </div>
    </>
  );
};
