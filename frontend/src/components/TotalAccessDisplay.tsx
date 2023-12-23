// TotalAccessDisplay.tsx
import React, { useEffect } from "react";
import { LocationType } from "../assets/dataTypes";
import { LoadingSpinner } from "./LoaderSpinner";

interface TotalAccessDisplayProps {
  selectedCountry: LocationType;
  isLoading: boolean;
  totalAccess: number | undefined;
  selectedDate: Date;
  allTimes: boolean;
}

const TotalAccessDisplay = ({
  selectedCountry,
  isLoading,
  totalAccess,
  selectedDate,
  allTimes,
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
          <p className="text-3xl font-bold">{totalAccess} visits</p>
        )}
      </div>
    </div>
  );
};

export default TotalAccessDisplay;
