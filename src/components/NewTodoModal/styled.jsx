import styled from "styled-components";
import { Box, Button, Checkbox, Modal, TextField } from "@material-ui/core";
import { COLORS } from "../../styles/colors";
import { KeyboardDateTimePicker } from "@material-ui/pickers";

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLORS.colorDarkTransparent};
`;

export const ModalContent = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background: ${COLORS.colorWhite};
  color: ${COLORS.colorDark};
  width: 90%;
  max-width: 900px;
  min-height: 300px;
  outline: none;
  border-radius: 5px;
  user-select: none;
`;

export const ModalTitle = styled.p`
  font-size: 18px;
`;

export const StyledTextField = styled(TextField)`
  width: 95%;
  border-radius: 5px;
  input {
    color: ${COLORS.colorDark};
  }
`;

export const StyledKeyboardDateTimePicker = styled(KeyboardDateTimePicker)`
  width: 95%;
  border-radius: 5px;
  button {
    color: ${COLORS.colorGreen} !important;
  }
  input {
    color: ${COLORS.colorDark} !important;
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  color: ${COLORS.colorGreen} !important;
`;

export const ButtonsBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 150px;
`;

export const SubmitButton = styled(Button)`
  background: ${COLORS.colorGreen} !important;
  color: ${COLORS.colorWhite} !important;
`;
