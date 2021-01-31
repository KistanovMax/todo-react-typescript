import React from "react";
import { useSelector } from "react-redux";
import AddIcon from "@material-ui/icons/Add";

import { AddButton, StyledFooter } from "./styled";

export default function Footer({ handleOpen }) {
  const { error } = useSelector((state) => state.Data);

  return (
    <StyledFooter display="flex" alignItems="center" justifyContent="flex-end">
      {!error && (
        <AddButton onClick={handleOpen} aria-label="add">
          <AddIcon />
        </AddButton>
      )}
    </StyledFooter>
  );
}
