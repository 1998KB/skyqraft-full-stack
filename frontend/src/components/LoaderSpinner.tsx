import React from "react";
import { LoadingSpinnerProps } from "../assets/props";

export const LoadingSpinner = ({ size }: LoadingSpinnerProps) => (
  <div
    className={`animate-spin rounded-full border-t-2 border-b-2 border-gray-300 ${
      size === "small" ? "h-6 w-6" : "h-24 w-24"
    }`}
  ></div>
);
