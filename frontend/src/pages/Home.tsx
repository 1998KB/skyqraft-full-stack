import { GoogleMaps } from "../components/googleMaps/GoogleMaps";
import { ByDate } from "../components/filters/ByDate";
import { ByLocation } from "../components/filters/ByLocation";
import { markerLegend } from "../assets/data";
import { LoadingSpinner } from "../components/LoaderSpinner";
import { useDataFetching } from "../hooks/useDataFetching";
import { MarkerLegend } from "../components/MarkerLegenda";
import TotalAccessDisplay from "../components/TotalAccessDisplay";
import { useAppContext } from "../context/AppContext";
import { Chart } from "../components/Chart";

export const Home = () => {
  useDataFetching();
  const { isLoading } = useAppContext();
  return (
    <div className="w-full flex flex-col justify-center items-center gap-6  bg-black  text-white">
      <div className=" absolute left-4 top-4 ">
        <h1 className=" text-4xl font-bold ">Skyqraft</h1>
        <h2 className=" text-2xl ">Coding Test</h2>
      </div>
      <div className="absolute top-0 m-4 flex gap-8">
        <ByLocation />
        <ByDate />
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-6 mt-28">
        <TotalAccessDisplay isLoading={isLoading} />
        <div
          className="w-2/3 flex justify-center items-center"
          style={{ height: "35em" }}
        >
          {isLoading ? <LoadingSpinner size="big" /> : <GoogleMaps />}
        </div>
        <MarkerLegend markerLegend={markerLegend} />
        <Chart />
      </div>
    </div>
  );
};
