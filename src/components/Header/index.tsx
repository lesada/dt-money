import logo from "@/assets/logo.svg";
import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";
import Input from "../Input";
import Modal from "../Modal";
import {
  Container,
  Content,
  Form,
  NewTransaction,
  SubmitButton,
  TransactionType,
  TransactionTypeButton,
} from "./styles";

function ModalContent() {
  return (
    <Form action="">
      <Input placeholder="Description" type="text" required />
      <Input placeholder="Price" type="number" required />
      <Input placeholder="Category" type="text" required />
      <TransactionType>
        <TransactionTypeButton $variant="income" value="income">
          <ArrowCircleUp size={24} /> Income
        </TransactionTypeButton>
        <TransactionTypeButton $variant="outcome" value="outcome">
          <ArrowCircleDown size={24} /> Outcome
        </TransactionTypeButton>
      </TransactionType>
      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  );
}

function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="" />
        <Modal
          title="New transaction"
          trigger={<NewTransaction>New Transaction</NewTransaction>}
        >
          <ModalContent />
        </Modal>
      </Content>
    </Container>
  );
}

export default Header;
