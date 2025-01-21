"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import TextField from "@mui/material/TextField";

import "react-datepicker/dist/react-datepicker.css";
import { BsCalendar } from "react-icons/bs";
export default function DateSelect({
  title,
  name,
  size,
  className,
  placeholder,
  value,
  finalData,
  setFinalData,
}) {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    setFinalData({
      ...finalData,
      [name]: startDate.toLocaleDateString("en-GB"),
    });
  }, [startDate]);
  return (
    <>
      <div className="flex flex-wrap mb-6">
        <div className="w-full">
          {" "}
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            {title}
          </label>
          <DatePicker
            className="appearance-none block w-full bg-slate-50/80 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500  "
            selected={startDate}
            dateFormat="dd/MM/YYYY"
            showIcon
            icon={<BsCalendar className=" py-3" />}
            toggleCalendarOnIconClick
            onChange={(date) => setStartDate(date)}
          />
        </div>
      </div>
    </>
  );
}
