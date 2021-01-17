import React, { ReactElement } from "react";
import { StyledDate } from "./styled";

export default function CurrentDate() {
  const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date();
  const currentDate = `${monthArr[date.getMonth()].toUpperCase()}, ${date.getDate()} ${date.getFullYear()}`;

  return (
    <StyledDate display="flex" alignItems="center">
      {currentDate}
    </StyledDate>
  );
}
