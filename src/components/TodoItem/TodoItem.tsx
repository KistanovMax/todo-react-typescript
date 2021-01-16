import React, { ReactElement, useState } from "react";

import { Box, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import {
  StyledItem,
  StyledCheckbox,
  StyledDeleteIcon,
  ImportantIcon,
  ImportantText,
  DateTimeBox,
  DateTime,
} from "./styled";

interface TodoItem {
  id: number;
  text: string;
  date: string;
  time: string;
  important: boolean;
}

export default function TodoItem({
  id,
  text,
  date,
  time,
}: TodoItem): ReactElement {
  const [checked, setChecked] = useState(false);
  const [isImportant, setIsImportant] = useState(false);

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

  const handleChecked = () => {
    setChecked(!checked);
  };

  const handleImportant = () => {
    setIsImportant(!isImportant);
  };

  const day = Number(date.substr(0, 2)) * 1;
  const month = monthArr[Number(date.substr(3, 2)) - 1];
  const year = date.substr(6, 4);
  const todoDate = `${day} ${month} ${year}`;

  return (
    <StyledItem
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      important={isImportant ? "yellow" : "dark"}
      onClick={() => console.log(id, text)}
    >
      <Box display="flex" alignItems="center">
        <IconButton onClick={handleImportant}>
          <ImportantIcon important={isImportant ? "dark" : "yellow"} />
        </IconButton>
        <p>{text}</p>
      </Box>

      <Box>
        <StyledCheckbox checked={checked} onChange={handleChecked} />
        <IconButton disabled={!checked} aria-label="delete">
          {checked ? <StyledDeleteIcon /> : <DeleteIcon />}
        </IconButton>
      </Box>
      {isImportant && <ImportantText>Important</ImportantText>}
      <DateTimeBox important={isImportant ? "dark" : "yellow"}>
        <DateTime>
          {todoDate}{" "}
          <p>
            <b>{time}</b>
          </p>
        </DateTime>
      </DateTimeBox>
    </StyledItem>
  );
}
