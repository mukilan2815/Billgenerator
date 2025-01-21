"use client";
import { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";

export default function RadioSelectWithInput({
  name,
  title,
  gstOptions,
  finalData,
  setFinalData,
}) {
  const [selectedOption, setSelectedOption] = useState("None");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setFinalData({ ...finalData, [name]: "None" });
  }, []);

  useEffect(() => {
    if (selectedOption !== "None") {
      setFinalData({ ...finalData, [name]: selectedOption });
    } else {
      setFinalData({ ...finalData, [name]: "" });
    }
  }, [selectedOption]);

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setFinalData({ ...finalData, [name + "_value"]: event.target.value });
  };

  return (
    <div className="mb-6">
      <FormLabel
        component="legend"
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      >
        {title}
      </FormLabel>
      <RadioGroup
        row
        aria-label="tax-identifier"
        name={name}
        value={selectedOption}
        onChange={handleRadioChange}
      >
        {gstOptions.map((option) => (
          <FormControlLabel
            key={option}
            value={option}
            control={<Radio color="success" />}
            label={option}
            className="text-slate-600 font-medium uppercase"
          />
        ))}
      </RadioGroup>

      {selectedOption !== "None" && (
        <TextField
          id={`${name}-input`}
          label={`Enter ${selectedOption}`}
          value={inputValue}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
      )}
    </div>
  );
}
