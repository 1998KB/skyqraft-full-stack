import React from "react";
import { europeanCountries } from "../../assets/data";
import { LocationType } from "../../assets/dataTypes";
interface ByLocationProps {
  selectedCountry: LocationType;
  setSelectedCountry: (country: LocationType) => void;
}

export const ByLocation = ({
  setSelectedCountry,
  selectedCountry,
}: ByLocationProps) => {
  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountryName = event.target.value;
    const selectedCountryObject = europeanCountries.find(
      (country) => country.country === selectedCountryName
    );

    if (selectedCountryObject) {
      setSelectedCountry(selectedCountryObject);
    }
  };
  return (
    <div className="flex items-center justify-between gap-4">
      <label htmlFor="country" className="text-lg font-semibold">
        Filter by Country:
      </label>
      <select
        id="country"
        name="country"
        value={selectedCountry.country}
        onChange={handleCountryChange}
        className="border-2 border-gray-300 rounded-md p-2 ml-2 w-36 text-black"
      >
        {europeanCountries.map((country) => (
          <option
            key={country.country}
            value={country.country}
            className="text-base"
          >
            {country.country}
          </option>
        ))}
      </select>
    </div>
  );
};
