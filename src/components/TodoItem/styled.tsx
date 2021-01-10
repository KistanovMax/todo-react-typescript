import styled from "styled-components";
import { Box, Checkbox } from "@material-ui/core";
import { COLORS } from "../../styles/colors";

import DeleteIcon from "@material-ui/icons/Delete";

export const StyledItem = styled(Box)`
  margin-bottom: 10px;
  background: ${COLORS.colorDark};
  color: ${COLORS.colorWhite};
  width: 95%;
  height: 60px;
  border-radius: 5px;
`;

export const TodoText = styled(Box)`
  margin-left: 20px;
`;

export const StyledCheckbox = styled(Checkbox)`
  color: ${COLORS.colorGreen} !important;
`;

export const StyledDeleteIcon = styled(DeleteIcon)`
  color: ${COLORS.colorPink} !important;
`;
