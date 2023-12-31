import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ByDateProps } from "../../assets/props";

export const ByDate = ({
  selectedDate,
  setSelectedDate,
  setAllTimes,
  allTimes,
}: ByDateProps) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <label htmlFor="date" className="text-lg font-semibold">
        Select Date:
      </label>
      <ReactDatePicker
        selected={selectedDate}
        onChange={(date: Date) => setSelectedDate(date)}
        dateFormat="yyyy-MM-dd"
        className="border-2 border-gray-300 rounded-md p-2 ml-2 w-36 text-black"
        maxDate={new Date()}
        enableTabLoop={false}
        calendarStartDay={1}
      />
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="selectAllDates"
          checked={allTimes}
          onChange={() => setAllTimes(!allTimes)}
        />
        <label htmlFor="selectAllDates">All Times</label>
      </div>
    </div>
  );
};
