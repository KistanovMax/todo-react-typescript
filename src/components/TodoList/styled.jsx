import styled from "styled-components";
import { Box } from "@material-ui/core";

import { COLORS } from "../../styles/colors";

export const StyledList = styled(Box)`
  margin-top: 90px;
  user-select: none;
`;

export const Loader = styled.p`
  color: ${COLORS.colorDark};
  font-size: 24px;
`;
