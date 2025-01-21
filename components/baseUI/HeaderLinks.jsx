"use client";
import React, { useEffect, useState } from "react";
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiPieChart,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import BillsNavigations from "./BillsNavigations";
import BillNavs from "@/lib/billnavs";
import Link from "next/link";
export default function ShiftingDropDown() {
  return (
    <div className="flex w-full justify-start  p-8 ">
      <Tabs />
    </div>
  );
}
export function Tabs() {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2 z-50"
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t}
          >
            {t.link ? (
              <Link className=" block h-full w-full" href={t.link}>
                {t.title}
              </Link>
            ) : (
              t.title
            )}
          </Tab>
        );
      })}
      <AnimatePresence>
        {selected && TABS[selected - 1].Component && (
          <Content dir={dir} selected={selected} />
        )}
      </AnimatePresence>{" "}
    </div>
  );
}

export function Tab({ children, tab, handleSetSelected, selected }) {
  return (
    <button
      id={`shift-tab-${tab.id}`}
      onMouseEnter={() => handleSetSelected(tab.id)}
      onClick={() => handleSetSelected(tab.id)}
      className={`flex items-center gap-1 tracking-wider rounded-full px-3 py-1 text-sm transition-colors ${
        selected === tab.id ? " bg-zinc-800 text-zinc-100" : "text-zinc-800"
      }`}
    >
      <span>{children}</span>
      {tab.Component ? (
        <FiChevronDown
          className={`transition-transform ${
            selected === tab.id ? "rotate-180" : ""
          }`}
        />
      ) : (
        ""
      )}
    </button>
  );
}

export function Content({ selected, dir }) {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute  -left-28 top-[calc(100%_+_24px)]  w-[700px] rounded-xl border border-neutral-200   bg-white  shadow-2xl "
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && t.Component && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
}

export function Bridge() {
  return <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />;
}

export function Nub({ selected }) {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-200   bg-white "
    />
  );
}

const TABS = [
  {
    title: "Bills",
    Component: BillsNavigations,
  },
  {
    title: "Pricing",
    Component: null,
    link: "/payment",
  },
  // {
  //   title: "Blog",
  //   Component: null,
  //   link: "/blog",
  // },
].map((n, idx) => ({ ...n, id: idx + 1 }));
