import styled from "styled-components";
import { Box, Fab } from "@material-ui/core";
import { COLORS } from "../../styles/colors";

export const StyledFooter = styled(Box)`
  position: fixed;
  bottom: 0px;
  max-width: 1024px;
  width: 100%;
  height: 80px;
`;

export const AddButton = styled(Fab)`
  background: ${COLORS.colorGreen} !important;
  color: ${COLORS.colorDark}!important;
  right: 20px;
`;
