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

interface NewTodoModalProps {
  open: boolean;
  handleAdd: (date: string, time: string, important: boolean) => void;
  handleClose: () => void;
  handleText: (e: { target: { value: React.SetStateAction<string> } }) => void;
}

export default function NewTodoModal({
  open,
  handleAdd,
  handleClose,
  handleText,
}: NewTodoModalProps): ReactElement {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [important, setImportant] = useState(false);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleImportant = () => {
    setImportant(true);
  };

  let date = "";
  let time = "";

  if (selectedDate) {
    date = selectedDate.toLocaleDateString();
    time = selectedDate.toLocaleTimeString().substr(0, 5);
  }

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
            onChange={handleText}
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
              control={<StyledCheckbox onChange={handleImportant} />}
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
                onClick={() => handleAdd(date, time, important)}
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
