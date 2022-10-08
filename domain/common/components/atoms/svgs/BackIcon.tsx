import React from "react";

interface IIconButtonProps {
  color?: string;
  onClick;
}

const BackIcon = ({ color = "black", onClick }: IIconButtonProps) => {
  return (
    <>
      <svg
        width={"current"}
        height={"current"}
        stroke={color}
        fill={"#FFF"}
        viewBox={`0 0 24 24`}
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          d="M15 19l-7-7 7-7"
        ></path>
      </svg>
    </>
  );
};

export default BackIcon;
