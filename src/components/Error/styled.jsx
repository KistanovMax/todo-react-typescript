import styled from "styled-components";
import { Box } from "@material-ui/core";

import { COLORS } from "../../styles/colors";

export const ErrorContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-transform: uppercase;
  color: rgb(30, 30, 30);
  padding-top: 20px;
`;

export const Image = styled.img`
  width: 90px;
  height: 60px;
  filter: brightness(0.8);
`;

export const Message = styled.p`
  padding-top: 20px;
  color: ${COLORS.colorPink};
`;
