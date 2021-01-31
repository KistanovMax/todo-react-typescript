import React from "react";

import dinoError from "../../assets/images/dino_error.gif";

import { ErrorContainer, Image, Message } from "./styled";

export default function Error({ error }) {
  return (
    <ErrorContainer>
      <div>
        <Image src={dinoError} alt="errorImage" />
        <Image src={dinoError} alt="errorImage" />
        <Image src={dinoError} alt="errorImage" />
      </div>
      <Message>{error}</Message>
    </ErrorContainer>
  );
}
