import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function ListSelect({
  title,
  data,
  finalData,
  setFinalData,
  name,
}) {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setFinalData({
      ...finalData,
      [name]: selected,
    });
  }, [selected]);
  return (
    <div className="flex flex-wrap mb-6">
      <div className="w-full">
        {" "}
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          {data.heading}
        </label>
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative">
            <Listbox.Button className=" appearance-none flex items-center justify-between w-full bg-slate-50/80 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ">
              <span className="truncate">
                {selected ? selected : "Select One"}
              </span>
              <span className="pointer-events-none  flex items-center">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm list-none pl-0 z-50">
                {data.data.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
}
