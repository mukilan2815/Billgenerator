"use client";
import React, { useState, useEffect } from "react";
import { TrashIcon } from "@heroicons/react/20/solid";

export default function AddItem({
  finalData,
  setFinalData,
  itemdesc,
  istax,
  hideQty,
}) {
  const [item, setItem] = useState({
    name: "",
    description: "",
    price: 0,
    qty: 1,
    tax: 0,
  });

  function delItem() {
    setItem({ name: "", description: "", price: 0, qty: 0 });
  }

  function addMoreItem() {
    setFinalData({ ...finalData, items: [...finalData.items, item] });
  }

  useEffect(() => {
    if (!item) {
      setItem({
        name: "",
        description: "",
        price: 0,
        qty: 1,
        tax: 0,
      });
    }
  }, []);

  useEffect(() => {
    setFinalData({ ...finalData, items: [item] });
  }, [item]);

  return (
    <div className="w-full overflow-x-scroll mb-6">
      <table className="divide-y divide-gray-200 min-w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/2">
              Item
            </th>
            <th className="px-2 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price/Rate
            </th>
            {!hideQty && (
              <th className="px-2 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Qty
              </th>
            )}
            {istax && (
              <th className="px-2 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tax %
              </th>
            )}
            <th className="px-2 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {finalData?.items?.length > 0 &&
            finalData.items.map((item, index) => (
              <ItemsRaw
                key={index}
                index={index}
                item={item}
                hideQty={hideQty}
                finalData={finalData}
                setFinalData={setFinalData}
                itemdesc={itemdesc}
                istax={istax}
              />
            ))}
        </tbody>
      </table>
      <div>
        <span
          className="bg-zinc-800 hover:bg-zinc-700 text-white text-sm py-1 px-4 rounded cursor-pointer"
          onClick={addMoreItem}
        >
          Add Item
        </span>
      </div>
    </div>
  );
}

export function ItemsRaw({
  item,
  index,
  finalData,
  setFinalData,
  itemdesc,
  istax,
  hideQty,
}) {
  const updateItem = (updatedItem) => {
    const updatedItems = finalData?.items.map((it, idx) =>
      idx === index ? updatedItem : it
    );
    setFinalData({ ...finalData, items: updatedItems });
  };

  const removeItem = () => {
    const filteredItems = finalData.items.filter((_, idx) => idx !== index);
    setFinalData({ ...finalData, items: filteredItems });
  };

  return (
    <tr>
      <td className="py-4">
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Item name"
            value={item?.name}
            className="border w-32 text-sm font-medium text-gray-900 bg-slate-100 py-2 px-4 rounded focus:outline-none focus:bg-white focus:border-gray-500"
            onChange={(e) => updateItem({ ...item, name: e.target.value })}
          />
          {itemdesc && (
            <input
              type="text"
              placeholder="Item description"
              value={item?.description}
              className="border w-32 text-sm font-medium text-gray-900 bg-slate-100 py-2 px-4 rounded focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={(e) =>
                updateItem({ ...item, description: e.target.value })
              }
            />
          )}
        </div>
      </td>

      <td className="px-2 py-4 text-center align-top">
        <div className="text-sm text-gray-900">
          <input
            type="number"
            placeholder="1"
            value={item?.price}
            className="border w-14 text-sm font-medium text-gray-900 bg-slate-100 py-2 px-2 rounded focus:outline-none focus:bg-white focus:border-gray-500"
            onChange={(e) => updateItem({ ...item, price: e.target.value })}
          />
        </div>
      </td>
      {!hideQty && (
        <td className="px-2 py-4 text-center align-top">
          <div className="text-sm text-gray-900">
            <input
              type="number"
              placeholder="1"
              value={item?.qty}
              className="border w-14 text-sm font-medium text-gray-900 bg-slate-100 py-2 px-2 rounded focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={(e) => updateItem({ ...item, qty: e.target.value })}
            />
          </div>
        </td>
      )}
      {istax && (
        <td className="px-2 py-4 text-center align-top">
          <div className="text-sm text-gray-900">
            <input
              type="number"
              placeholder="0"
              value={item?.tax}
              className="border w-14 text-sm font-medium text-gray-900 bg-slate-100 py-2 px-2 rounded focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={(e) => updateItem({ ...item, tax: e.target.value })}
            />
          </div>
        </td>
      )}
      <td className="px-6 py-4 text-right align-top">
        <span
          className="bg-red-500 hover:bg-red-700 text-white flex items-center justify-center py-2 px-2 rounded cursor-pointer"
          onClick={removeItem}
        >
          <TrashIcon className="h-5 w-5" />
        </span>
      </td>
    </tr>
  );
}
