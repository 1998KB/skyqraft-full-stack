import React from "react";
import { MarkerLegendType } from "../assets/dataTypes";

interface MarkerLegendProps {
  markerLegend: MarkerLegendType[];
}

export const MarkerLegend = ({ markerLegend }: MarkerLegendProps) => {
  return (
    <div className="flex flex-col items-center gap-2 bg-gray-300 w-2/5  p-4 rounded-md shadow-md">
      <div className="grid grid-cols-3 gap-4">
        {markerLegend.map((legendItem, index) => (
          <div key={index} className="flex items-center gap-2 text-black">
            <img
              src={legendItem.iconUrl}
              alt={legendItem.label}
              className="w-6 h-6"
            />
            <span className="text-sm font-semibold">{legendItem.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
