import React from "react";

const CopyIcon = ({
  width,
  height,
  primaryFill = "#51636B",
  secondaryFill = "#fff",
  style = {}
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 13 14"
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.70833 12.4167C2.41042 12.4167 2.15529 12.3105 1.94296 12.0982C1.73063 11.8858 1.62464 11.6309 1.625 11.3333V4.29168C1.625 4.13821 1.677 4.00947 1.781 3.90547C1.885 3.80147 2.01356 3.74965 2.16667 3.75001C2.32014 3.75001 2.44888 3.80201 2.55288 3.90601C2.65688 4.01001 2.7087 4.13857 2.70833 4.29168V11.3333H8.125C8.27847 11.3333 8.40721 11.3853 8.51121 11.4893C8.61521 11.5933 8.66703 11.7219 8.66667 11.875C8.66667 12.0285 8.61467 12.1572 8.51067 12.2612C8.40667 12.3652 8.27811 12.417 8.125 12.4167H2.70833ZM4.875 10.25C4.57708 10.25 4.32196 10.1438 4.10963 9.93151C3.89729 9.71918 3.79131 9.46423 3.79167 9.16668V2.66668C3.79167 2.36876 3.89783 2.11364 4.11017 1.9013C4.3225 1.68897 4.57745 1.58298 4.875 1.58334H9.75C10.0479 1.58334 10.303 1.68951 10.5154 1.90184C10.7277 2.11418 10.8337 2.36912 10.8333 2.66668V9.16668C10.8333 9.46459 10.7272 9.71972 10.5148 9.93205C10.3025 10.1444 10.0476 10.2504 9.75 10.25H4.875Z"
      fill="#FBFBFB"
    />
  </svg>
);

export default CopyIcon;