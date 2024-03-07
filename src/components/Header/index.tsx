import logo from "@/assets/logo.svg";
import Modal from "../Modal";
import { Container, Content, NewTransaction } from "./styles";

function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="" />

        <Modal
          title="New transaction"
          trigger={<NewTransaction>New Transaction</NewTransaction>}
        >
          <form action=""></form>
        </Modal>
      </Content>
    </Container>
  );
}

export default Header;
