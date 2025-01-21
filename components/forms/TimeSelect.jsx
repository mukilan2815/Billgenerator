"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdAccessTime } from "react-icons/md";
import { TfiTime } from "react-icons/tfi";
export default function TimeSelect({
  title,
  name,
  size,
  className,
  placeholder,
  value,
  finalData,
  setFinalData,
}) {
  const [startTime, setStartTime] = useState(new Date());
  useEffect(() => {
    setFinalData({
      ...finalData,
      [name]:
        String(startTime.getHours()).padStart(2, "0") +
        ":" +
        String(startTime.getMinutes()).padStart(2, "0"),
    });
  }, [startTime]);
  return (
    <>
      <div className="flex flex-wrap mb-6">
        <div className="w-full">
          {" "}
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            {title}
          </label>
          <DatePicker
            wrapperClassName="  none"
            className="appearance-none block w-full bg-slate-50/80 text-gray-700 border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
            selected={startTime}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            timeFormat="HH:mm"
            dateFormat="h:mm"
            showIcon
            icon={<TfiTime className=" py-3" />}
            toggleCalendarOnIconClick
            onChange={(date) => setStartTime(date)}
          />
        </div>
      </div>
    </>
  );
}
