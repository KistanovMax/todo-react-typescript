import React, { ReactElement } from "react";
import AddIcon from "@material-ui/icons/Add";
import { AddButton, StyledFooter } from "./styled";

export default function Footer(): ReactElement {
  return (
    <StyledFooter display="flex" alignItems="center" justifyContent="flex-end">
      <AddButton aria-label="add">
        <AddIcon />
      </AddButton>
    </StyledFooter>
  );
}
