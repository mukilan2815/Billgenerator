import { HiMiniReceiptPercent } from "react-icons/hi2";

export default function BillViwContainer({ children, session }) {
  return (
    <>
      <div className="lg:-ml-14 lg:-mt-5 lg:mr-14 h-fit  lg:sticky lg:top-28 w-full overflow-x-scroll  ">
        <div className=" bg-gradient-to-r from-green-500 via-cyan-500  to-indigo-500   font-medium text-white max-w-sm px-5 py-2 rounded-lg mb-4 space-y-2 ">
          <p>
            🚀 Unlimited Bill & Invoice Generation for Life - Just at
            <strong className=" ml-1  text-yellow-300 sm:text-xl">
              ₹249
            </strong>{" "}
            <strong>! Pay Once, Use Forever!</strong>
            🕒
          </p>
          <div className="  text-right ">
            <a
              href={"/payment"}
              className=" whitespace-nowrap font-semibold bg-white rounded-full px-5 py-1 text-black "
            >
              Grab Now 🔥
            </a>
          </div>
        </div>
        <div className=" bg-slate-600 px-4 py-1 w-fit rounded  -mb-1 text-white mx-7 text-sm  ">
          Live preview
        </div>
        <div className=" bg-white  border border-slate-500 w-fit overflow-x-scroll relative   ">
          <div className=" h-full w-full  overflow-clip">
            <div
              id="watermark"
              className="  absolute z-20 top-0 bottom-0 right-0 left-0  flex items-center justify-center "
            >
              <div className="  -rotate-45  top-28 opacity-15 overflow-clip">
                <div className=" flex items-center h-full gap-1 text-black text-4xl font-semibold ">
                  <HiMiniReceiptPercent size={26} className="  " />
                  <span className=" ">BillGenerator</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" absolute z-20 top-1 right-5 text-[8px]">
            Watermark will be removed from actual pdf.
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
