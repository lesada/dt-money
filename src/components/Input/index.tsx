import { Container } from "./styles";

import React from "react";

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "ref">;

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <Container ref={ref} {...props} />;
});

export default Input;
