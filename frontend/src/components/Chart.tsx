import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  Tooltip,
  Legend,
  LinearScale,
} from "chart.js";
import { europeanCountries } from "../assets/data";
import { LocationType } from "../assets/dataTypes";
import { useEffect, useState } from "react";
import { filterByDate, filterByLocation } from "./utils/helperFn";
import { ChartProps } from "../assets/props";

ChartJS.register(BarElement, CategoryScale, Tooltip, Legend, LinearScale);

const chartOptions = {
  scales: {
    x: {
      grid: {
        color: "grey",
      },
      ticks: {
        color: "white",
      },
    },
    y: {
      ticks: {
        color: "white",
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: "white",
      },
    },
  },
};
export const Chart = ({
  allLocations,
  selectedDate,
  allTimes,
  selectedCountry,
}: ChartProps) => {
  const [filteredData, setFilteredData] = useState<LocationType[]>([]);

  useEffect(() => {
    let filteredByDate: LocationType[] = allLocations;

    if (!allTimes) {
      filteredByDate = filterByDate(allLocations, selectedDate);
    }

    setFilteredData(filteredByDate);
  }, [selectedDate, allLocations, allTimes]);

  const dataValues = europeanCountries.map((country) => {
    if (country.country === "Europe") {
      return filteredData.length;
    } else {
      const filteredLocations = filterByLocation(filteredData, country.country);
      return filteredLocations.length;
    }
  });

  const labelsValues = europeanCountries.map((c) => c.country);

  const backgroundColors = labelsValues.map((country) =>
    country === selectedCountry.country ? "blue" : "grey"
  );
  const chartData = {
    labels: labelsValues,
    datasets: [
      {
        label: "Access Counts",
        backgroundColor: backgroundColors,
        data: dataValues,
      },
    ],
  };

  return (
    <div className="w-full px-20 py-5">
      <h1 className="text-center font-bold text-3xl mb-2">
        Access Data Chart
        {allTimes ? (
          <span> All Times</span>
        ) : (
          <span>
            {" "}
            the {selectedDate.getDate()}/{selectedDate.getMonth() + 1}/
            {selectedDate.getFullYear()}
          </span>
        )}
      </h1>
      <Bar
        key={selectedDate?.toString()}
        data={chartData}
        options={chartOptions}
      />
    </div>
  );
};
