import React, { ReactElement } from "react";
import { Box } from "@material-ui/core";

import {
  StyledModal,
  ModalContent,
  ModalTitle,
  StyledTextField,
  SubmitButton,
} from "./styled";

export default function NewTodoModal(): ReactElement {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ModalContent>
          <ModalTitle id="simple-modal-title">New Todo</ModalTitle>
          <StyledTextField color="secondary" label="ToDo" variant="outlined" />
          <SubmitButton
            onClick={handleClose}
            color="primary"
            variant="contained"
          >
            Submit
          </SubmitButton>
        </ModalContent>
      </StyledModal>
    </Box>
  );
}
