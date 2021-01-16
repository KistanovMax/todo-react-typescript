import React, { ReactElement } from "react";
import AddIcon from "@material-ui/icons/Add";
import { AddButton, StyledFooter } from "./styled";

interface Footer {
  handleOpen: () => void;
}

export default function Footer({ handleOpen }: Footer): ReactElement {
  return (
    <StyledFooter display="flex" alignItems="center" justifyContent="flex-end">
      <AddButton onClick={handleOpen} aria-label="add">
        <AddIcon />
      </AddButton>
    </StyledFooter>
  );
}
