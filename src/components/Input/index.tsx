import { Container } from "./styles";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

function Input({ ...rest }: InputProps) {
  return <Container {...rest} />;
}

export default Input;
