import styled from "styled-components";
import { Box, Checkbox } from "@material-ui/core";
import { COLORS } from "../../styles/colors";

import DeleteIcon from "@material-ui/icons/Delete";
import LabelImportantRoundedIcon from "@material-ui/icons/LabelImportantRounded";

export const StyledItem = styled(Box)`
  margin-bottom: 10px;
  background: ${(props: { important: string }) =>
    props.important === "yellow" && COLORS.colorYellow} !important;
  background: ${(props: { important: string }) =>
    props.important === "dark" && COLORS.colorDark} !important;
  color: ${(props: { important: string }) =>
    props.important === "yellow" && COLORS.colorDark} !important;
  color: ${(props: { important: string }) =>
    props.important === "dark" && COLORS.colorWhite} !important;
  width: 95%;
  height: 60px;
  border-radius: 5px;
  position: relative;
  user-select: none;
`;

export const StyledCheckbox = styled(Checkbox)`
  color: ${COLORS.colorGreen} !important;
`;

export const StyledDeleteIcon = styled(DeleteIcon)`
  color: ${COLORS.colorPink} !important;
`;

export const ImportantIcon = styled(LabelImportantRoundedIcon)`
  color: ${COLORS.colorYellow} !important;
  color: ${(props: { important: string }) =>
    props.important === "yellow" && COLORS.colorYellow} !important;
  color: ${(props: { important: string }) =>
    props.important === "dark" && COLORS.colorDark} !important;
`;

export const ImportantText = styled.p`
  position: absolute;
  top: 8px;
  left: 48px;
  font-size: 8px;
  text-transform: uppercase;
  color: ${COLORS.colorPink};
`;
