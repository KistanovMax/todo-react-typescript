import styled from "styled-components";
import { Box, Button, Modal, TextField } from "@material-ui/core";
import { COLORS } from "../../styles/colors";

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLORS.colorDarkTransparent};
`;

export const ModalContent = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${COLORS.colorWhite};
  color: ${COLORS.colorDark};
  min-width: 350px;
  max-width: 500px;
  min-height: 400px;
  max-height: 500px;
  outline: none;
  border-radius: 5px;
  user-select: none;
`;

export const ModalTitle = styled.p`
  font-size: 20px;
  margin-top: 20px;
`;

export const StyledTextField = styled(TextField)`
  width: 95%;
  border-radius: 5px;
`;

export const SubmitButton = styled(Button)`
  margin-bottom: 20px !important;
`;
