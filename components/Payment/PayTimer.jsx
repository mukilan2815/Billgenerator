"use client";
import React from "react";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className=" mt-10">
      <div className=" bg-zinc-800 text-white px-10 py-4 rounded-2xl text-center max-w-sm ">
        <p className=" text-lg mb-4">Limited Time Deal. Offer Ends In ⚡ </p>
        <div className=" flex items-center space-x-2 justify-center">
          <div className=" flex flex-col items-center gap-2">
            <span className="w-11 text-3xl bg-rose-500 text-white p-1 rounded-md">
              00
            </span>
            <span className=" text-xs">Hours</span>
          </div>
          <span className=" text-3xl self-start"> :</span>
          <div className=" flex flex-col items-center gap-2">
            <span className=" w-11 text-3xl bg-rose-500 text-white p-1 rounded-md">
              {minutes}
            </span>
            <span className=" text-xs">Minutes</span>
          </div>
          <span className=" text-3xl self-start"> :</span>
          <div className=" flex flex-col items-center gap-2">
            <span className=" w-11 text-3xl bg-rose-500 text-white p-1 rounded-md">
              {seconds}
            </span>
            <span className=" text-xs">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PayTimer() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 2424); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} autoStart={true} />
    </div>
  );
}
