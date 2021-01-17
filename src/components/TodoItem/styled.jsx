import styled from "styled-components";
import { Box, Checkbox } from "@material-ui/core";
import { COLORS } from "../../styles/colors";

import DeleteIcon from "@material-ui/icons/Delete";
import LabelImportantRoundedIcon from "@material-ui/icons/LabelImportantRounded";

export const StyledItem = styled(Box)`
  margin-bottom: 25px;
  background: ${(props) => props.important === "yellow" && COLORS.colorYellow} !important;
  background: ${(props) => props.important === "dark" && COLORS.colorDark} !important;
  color: ${(props) => props.important === "yellow" && COLORS.colorDark} !important;
  color: ${(props) => props.important === "dark" && COLORS.colorWhite} !important;
  width: 95%;
  height: 60px;
  border-radius: 5px;
  border-top-left-radius: 0;
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
  color: ${(props) => props.important === "yellow" && COLORS.colorYellow} !important;
  color: ${(props) => props.important === "dark" && COLORS.colorDark} !important;
`;

export const ImportantText = styled.p`
  position: absolute;
  top: 8px;
  left: 48px;
  font-size: 8px;
  text-transform: uppercase;
  color: ${COLORS.colorPink};
`;

export const DateTimeBox = styled(Box)`
  background: ${(props) => props.important === "yellow" && COLORS.colorYellow} !important;
  background: ${(props) => props.important === "dark" && COLORS.colorDark} !important;
  color: ${(props) => props.important === "yellow" && COLORS.colorDark} !important;
  color: ${(props) => props.important === "dark" && COLORS.colorWhite} !important;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 20px;
  position: absolute;
  top: -20px;
  font-size: 10px;
  border-top-left-radius: 20px;
  border-top-right-radius: 50px;
`;

export const DateTime = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 80%;
  font-size: 12px;
`;
