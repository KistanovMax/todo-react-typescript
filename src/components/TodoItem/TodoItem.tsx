import React, { ReactElement, useState } from "react";

import { Box, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import {
  StyledItem,
  StyledCheckbox,
  StyledDeleteIcon,
  ImportantIcon,
  ImportantText,
} from "./styled";

interface TodoItem {
  id: number;
  text: string;
  important: boolean;
}

export default function TodoItem({ id, text }: TodoItem): ReactElement {
  const [checked, setChecked] = useState(false);
  const [isImportant, setIsImportant] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };

  const handleImportant = () => {
    setIsImportant(!isImportant);
  };

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
    </StyledItem>
  );
}
