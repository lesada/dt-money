import logo from "@/assets/logo.svg";
import { Container, Content, NewTransaction } from "./styles";

function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="" />
        <NewTransaction>New Transaction</NewTransaction>
      </Content>
    </Container>
  );
}

export default Header;
