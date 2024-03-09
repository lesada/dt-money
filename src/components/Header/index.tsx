import logo from "@/assets/logo.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";
import { useForm } from "react-hook-form";
import Input from "../Input";
import Modal from "../Modal";
import { HeaderSchema, headerSchema } from "./schema";
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
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<HeaderSchema>({
    resolver: zodResolver(headerSchema),
  });

  const onSubmit = async (data: HeaderSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Description"
        type="text"
        {...register("description")}
      />
      <Input
        placeholder="Value"
        type="number"
        {...register("value")}
        inputMode="decimal"
      />
      <Input placeholder="Category" type="text" {...register("category")} />
      <TransactionType>
        <TransactionTypeButton $variant="income" value="income">
          <ArrowCircleUp size={24} /> Income
        </TransactionTypeButton>
        <TransactionTypeButton $variant="outcome" value="outcome">
          <ArrowCircleDown size={24} /> Outcome
        </TransactionTypeButton>
      </TransactionType>
      <SubmitButton type="submit" disabled={isSubmitting}>
        Submit
      </SubmitButton>
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
