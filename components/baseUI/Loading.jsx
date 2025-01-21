export default function Loading() {
  return (
    <div className=" w-full h-screen flex items-center justify-center ">
      <span className="  text-emerald-400">
        <svg
          className=" h-20 w-20"
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
      </span>
    </div>
  );
}
