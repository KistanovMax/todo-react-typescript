import styled from "styled-components";
import { Box } from "@material-ui/core";
import { COLORS } from "../../styles/colors";

export const StyledDate = styled(Box)`
  height: 64px;
  border-radius: 5px;
  color: ${COLORS.colorDark};
  font-size: 16px;
  font-weight: 500;
  margin-right: 10px;
`;
