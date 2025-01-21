"use client";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
export default function SignatureUpload({
  title,
  description,
  name,
  className,
  placeholder,
  finalData,
  setFinalData,
  type,
  value,
  required,
}) {
  const [file, setFile] = useState(null);
  const [base64DataUrl, setBase64DataUrl] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Url = reader.result;
        setFinalData({ ...finalData, [name]: base64Url });
      };
      reader.readAsDataURL(selectedFile);
      setFile(selectedFile);
    }
  };

  return (
    <>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          {" "}
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            {title}
          </label>
          <input
            required={required ? true : false}
            type={"file"}
            accept=".png, .jpeg, .jpg, .webp"
            className={
              " my-4 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold  file:bg-zinc-100 file:text-zinc-950 hover:file:bg-zinc-200" +
              (className ? className : "")
            }
            value={value}
            onChange={handleFileChange}
          />
        </div>
      </div>
    </>
  );
}
