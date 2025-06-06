import { HTMLAttributes } from "react";

export const ChevronIcon = (props: HTMLAttributes<SVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.7 15.7C18.5 15.9 18.3 16 18 16C17.7 16 17.5 15.9 17.3 15.7L12 10.4L6.7 15.7C6.3 16.1 5.7 16.1 5.3 15.7C4.9 15.3 4.9 14.7 5.3 14.3L11.3 8.3C11.7 7.9 12.3 7.9 12.7 8.3L18.7 14.3C19.1 14.7 19.1 15.3 18.7 15.7Z"
        fill="#212529"
      />
      <mask
        id="mask0_13_33"
        maskUnits="userSpaceOnUse"
        x="5"
        y="8"
        width="14"
        height="8"
      >
        <path
          d="M18.7 15.7C18.5 15.9 18.3 16 18 16C17.7 16 17.5 15.9 17.3 15.7L12 10.4L6.7 15.7C6.3 16.1 5.7 16.1 5.3 15.7C4.9 15.3 4.9 14.7 5.3 14.3L11.3 8.3C11.7 7.9 12.3 7.9 12.7 8.3L18.7 14.3C19.1 14.7 19.1 15.3 18.7 15.7Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_13_33)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H24V24H0V0Z"
          fill="#212529"
        />
      </g>
    </svg>
  );
};
