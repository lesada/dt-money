import logo from "@/assets/logo.svg";
import Input from "../Input";
import Modal from "../Modal";
import {
  Container,
  Content,
  Form,
  NewTransaction,
  SubmitButton,
} from "./styles";

function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="" />

        <Modal
          title="New transaction"
          trigger={<NewTransaction>New Transaction</NewTransaction>}
        >
          <Form action="">
            <Input placeholder="Description" type="text" required />
            <Input placeholder="Price" type="number" required />
            <Input placeholder="Category" type="text" required />
            <SubmitButton type="submit">Submit</SubmitButton>
          </Form>
        </Modal>
      </Content>
    </Container>
  );
}

export default Header;
