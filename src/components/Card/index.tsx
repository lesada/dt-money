import formatToCurrency from "@/utils/formatToCurrency";
import { CardHeader, Container, Value } from "./styles";
type CardProps = {
  title: string;
  value: number;
  icon: React.ReactNode;
  detach?: boolean;
};

function Card({ title, value, detach, icon }: CardProps) {
  return (
    <Container $detach={detach}>
      <CardHeader>
        <span>{title}</span>
        {icon}
      </CardHeader>
      <Value>{formatToCurrency(value)}</Value>
    </Container>
  );
}

export default Card;
