export default function Loading() {
  return (
    <div className=" w-full h-screen flex items-center justify-center ">
      <div className="  h-16 w-16 rounded-2xl border shadow-2xl flex items-center justify-center">
        <Loding2 />
        {/* <span className="  text-black">
          <svg
            className=" h-9 w-9"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeDasharray="15"
              strokeDashoffset="15"
              strokeLinecap="round"
              strokeWidth="2"
              d="M12 3C16.9706 3 21 7.02944 21 12"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.3s"
                values="15;0"
              ></animate>
              <animateTransform
                attributeName="transform"
                dur="1.5s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
              ></animateTransform>
            </path>
          </svg>
        </span> */}
      </div>
    </div>
  );
}

export function Loding2() {
  return (
    <div className="relative inline-flex flex-col gap-2 items-center justify-center">
      <div className="relative flex w-10 h-10">
        <i className="absolute w-full h-full rounded-full animate-spinner-ease-spin border-solid border-t-transparent border-l-transparent border-r-transparent  border-[3px] border-b-zinc-950"></i>
        <i className="absolute w-full h-full rounded-full opacity-75 animate-spinner-linear-spin border-dotted border-t-transparent border-l-transparent border-r-transparent border-[3px] border-b-zinc-950"></i>
      </div>
    </div>
  );
}
