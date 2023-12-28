import { LocationType } from "../assets/dataTypes";
import { TotalAccessDisplayProps } from "../assets/props";
import { LoadingSpinner } from "./LoaderSpinner";
import React from "react";

export const TotalAccessDisplay = ({
  selectedCountry,
  totalAccess,
  selectedDate,
  allTimes,
  isLoading,
}: TotalAccessDisplayProps) => {
  return (
    <div className="flex flex-col gap-6 bg-gray-800 w-2/5 text-white p-4 rounded-md shadow-md">
      <div className="flex justify-between items-center gap-4">
        <p className="text-xl font-semibold">
          Total website access in {selectedCountry.country}{" "}
          {allTimes ? (
            <span>all times:</span>
          ) : (
            <span>
              the {selectedDate.getDate()}/{selectedDate.getMonth() + 1}/
              {selectedDate.getFullYear()}:
            </span>
          )}
        </p>
        {isLoading ? (
          <LoadingSpinner size="small" />
        ) : (
          <p className="text-3xl font-bold">{totalAccess!} visits</p>
        )}
      </div>
    </div>
  );
};
