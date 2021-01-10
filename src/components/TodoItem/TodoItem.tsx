import React, { ReactElement, useState } from "react";

import { Box, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import {
  StyledItem,
  TodoText,
  StyledCheckbox,
  StyledDeleteIcon,
} from "./styled";

interface TodoItem {
  id: number;
  text: string;
}

export default function TodoItem({ id, text }: TodoItem): ReactElement {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <StyledItem
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      onClick={() => console.log(id, text)}
    >
      <TodoText>{text}</TodoText>
      <Box>
        <StyledCheckbox checked={checked} onChange={handleChange} />
        <IconButton disabled={!checked} aria-label="delete">
          {checked ? <StyledDeleteIcon /> : <DeleteIcon />}
        </IconButton>
      </Box>
    </StyledItem>
  );
}
