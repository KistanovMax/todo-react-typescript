import React, { ReactElement } from "react";
import { Box } from "@material-ui/core";
import { StyledHeader, Title, Logo } from "./styled";
import logo from "../../assets/icons/logo.svg";
import CurrentDate from "../Date/Date";

export default function Header(): ReactElement {
  return (
    <StyledHeader
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box display="flex" alignItems="center">
        <Logo src={logo} alt="Logo" />
        <Title>Todo App</Title>
      </Box>
      <CurrentDate />
    </StyledHeader>
  );
}
