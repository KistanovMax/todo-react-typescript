import styled from "styled-components";
import { Box } from "@material-ui/core";
import { COLORS } from "../../styles/colors";

export const StyledHeader = styled(Box)`
  position: fixed;
  top: 0px;
  max-width: 1024px;
  width: 100%;
  height: 64px;
  background: ${COLORS.colorWhite};
  box-shadow: 0px 2px 12px ${COLORS.colorShadow};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Title = styled.p`
  margin-left: 20px;
  color: ${COLORS.colorDark};
  font-size: 26px;
  font-weight: 500;
`;

export const Logo = styled.img`
  margin-left: 20px;
  width: 50px;
  height: 50px;
`;
