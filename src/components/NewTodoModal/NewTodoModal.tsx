import React, { ReactElement, useState } from "react";
import { Box, Button, FormControlLabel } from "@material-ui/core";

import {
  StyledModal,
  ModalContent,
  ModalTitle,
  StyledTextField,
  StyledKeyboardDateTimePicker,
  StyledCheckbox,
  ButtonsBox,
  SubmitButton,
} from "./styled";

interface NewTodoModal {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NewTodoModal({
  open,
  setOpen,
}: NewTodoModal): ReactElement {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleClose = () => {
    setOpen(false);
  };

  const handleSaveTodo = () => {
    ("");
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <Box>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
      >
        <ModalContent>
          <ModalTitle id="simple-modal-title">NEW TODO</ModalTitle>
          <StyledTextField
            color="primary"
            variant="outlined"
            label="What you need to do ?"
          />
          <StyledKeyboardDateTimePicker
            autoOk
            inputVariant="outlined"
            ampm={false}
            label="Choose date and time"
            value={selectedDate}
            onChange={handleDateChange}
            disablePast
            format="dd.MM.yyyy HH:mm"
          />
          <Box display="flex" justifyContent="space-between" width="95%">
            <FormControlLabel
              value="end"
              control={<StyledCheckbox />}
              label="Important"
              labelPlacement="end"
            />
            <ButtonsBox>
              <Button
                onClick={handleClose}
                color="primary"
                variant="outlined"
                size="small"
              >
                Cancel
              </Button>
              <SubmitButton
                onClick={handleSaveTodo}
                variant="contained"
                size="small"
              >
                Save
              </SubmitButton>
            </ButtonsBox>
          </Box>
        </ModalContent>
      </StyledModal>
    </Box>
  );
}
