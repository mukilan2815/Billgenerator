"use client";
import React from "react";

export default function TextAreaInput({
  title,
  description,
  name,
  size,
  className,
  placeholder,
  value,
  finalData,
  setFinalData,
  required,
}) {
  return (
    <>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            {title}
          </label>
          <textarea
            required={required ? true : false}
            className={
              "appearance-none block w-full text-base bg-slate-50/80 text-gray-800 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" +
              (className ? ` ${className}` : "")
            }
            placeholder={placeholder || ""}
            value={value}
            onChange={(e) =>
              setFinalData({ ...finalData, [name]: e.target.value })
            }
          />
          <p className="text-gray-600 text-xs italic">{description}</p>
        </div>
      </div>
    </>
  );
}
