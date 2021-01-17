import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { AddButton, StyledFooter } from "./styled";

export default function Footer({ handleOpen }) {
  return (
    <StyledFooter display="flex" alignItems="center" justifyContent="flex-end">
      <AddButton onClick={handleOpen} aria-label="add">
        <AddIcon />
      </AddButton>
    </StyledFooter>
  );
}
