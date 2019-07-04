import React from "react";

import { Container } from "./styles";

const InputForm = ({ label, ...props }) => (
  <Container>
    <span>{label}</span>
    <input {...props} />
  </Container>
);

export default InputForm;
