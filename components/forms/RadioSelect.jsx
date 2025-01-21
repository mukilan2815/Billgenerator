"use client";
import { useEffect, useState } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { usePathname } from "next/navigation";

export default function RadioSelect({
  name,
  title,
  data,
  finalData,
  setFinalData,
  key,
}) {
  const [nameValue, setNameValue] = useState("");
  function findObjectsByTitle(searchString) {
    return data.data.filter((obj) => obj.title === searchString);
    // Use find() instead of filter() if you only want the first matching object
  }
  useEffect(() => {
    setNameValue(data.data[0].title);
  }, []);
  useEffect(() => {
    setFinalData({ ...finalData, [name]: data.data[0].title });
  }, [nameValue]);

  useEffect(() => {
    setFinalData({
      ...finalData,
      [name + "_data"]: findObjectsByTitle(finalData[name])[0],
    });
  }, [finalData[name]]);

  return (
    <div className=" mb-6">
      <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {title}
      </p>
      <FormControl accessKey={name}>
        <RadioGroup
          accessKey={name}
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          defaultValue={data.data[0].title}
          onChange={(e) =>
            setFinalData({ ...finalData, [name]: e.target.value })
          }
        >
          {data.data.map((plan) => (
            <FormControlLabel
              key={plan.title}
              value={plan.title}
              control={<Radio color="success" className=" square-radio" />}
              label={plan.title}
              className=" text-slate-600 font-medium"
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

// export default function SelectTamplate({
//   name,
//   data,
//   finalData,
//   setFinalData,
// }) {
//   const templates = data;

//   return (
//     <div className="w-full">
//       <div className="mx-auto w-full  ">
//         <p>{data.heading}</p>
//         <RadioGroup
//           value={finalData[name]}
//           onChange={(e) => setFinalData({ ...finalData, [name]: e })}
//         >
//           <div className="flex gap-5">
//             {templates.data.map((plan) => (
//               <RadioGroup.Option
//                 key={plan.title}
//                 value={plan}
//                 className={({ active, checked }) =>
//                   `${active ? "" : ""}
//                   ${checked ? "bg-blue-500 text-white " : "bg-white"}
//                     relative  rounded-md`
//                 }
//               >
//                 {({ active, checked }) => (
//                   <>
//                     <div className="flex gap-2 w-full items-center justify-between h-8 px-3 rounded-md ring-1  ring-slate-200">
//                       {checked && (
//                         <div className="shrink-0 text-white">
//                           <CheckIcon className="h-6 w-6" />
//                         </div>
//                       )}
//                       <div className="flex items-center">
//                         <div className="text-sm">
//                           <RadioGroup.Label
//                             as="p"
//                             className={`font-medium  py-1  ${
//                               checked ? "text-white" : "text-gray-900"
//                             }`}
//                           >
//                             {plan.title}
//                           </RadioGroup.Label>
//                         </div>
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </RadioGroup.Option>
//             ))}
//           </div>
//         </RadioGroup>
//       </div>
//     </div>
//   );
// }

// function CheckIcon(props) {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" {...props} height={18} width={18}>
//       <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
//       <path
//         d="M7 13l3 3 7-7"
//         stroke="#fff"
//         strokeWidth={1.5}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }
