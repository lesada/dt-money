import api from "@/api";
import logo from "@/assets/logo.svg";
import { useTransactions } from "@/contexts/transactions";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";
import { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
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

function ModalContent({ closeModal }: { closeModal: () => void }) {
  const { setTransactions } = useTransactions();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<HeaderSchema>({
    resolver: zodResolver(headerSchema),
  });

  const onSubmit = useCallback(
    async (data: HeaderSchema) => {
      const response = await api.post("/transactions", {
        ...data,
        createdAt: new Date(),
      });

      reset();

      setTransactions((prevTransactions) => [
        response.data,
        ...prevTransactions,
      ]);
      closeModal();
    },
    [reset, setTransactions, closeModal]
  );

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
        {...register("value", { valueAsNumber: true })}
        inputMode="decimal"
        step={0.01}
      />
      <Input placeholder="Category" type="text" {...register("category")} />
      <Controller
        control={control}
        name="type"
        render={({ field }) => (
          <TransactionType onValueChange={field.onChange} value={field.value}>
            <TransactionTypeButton $variant="income" value="income">
              <ArrowCircleUp size={24} /> Income
            </TransactionTypeButton>
            <TransactionTypeButton $variant="outcome" value="outcome">
              <ArrowCircleDown size={24} /> Outcome
            </TransactionTypeButton>
          </TransactionType>
        )}
      />

      <SubmitButton type="submit" disabled={isSubmitting}>
        Submit
      </SubmitButton>
    </Form>
  );
}

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Container>
      <Content>
        <img src={logo} alt="" />
        <Modal
          title="New transaction"
          trigger={<NewTransaction>New Transaction</NewTransaction>}
          open={isModalOpen}
          setOpen={setIsModalOpen}
        >
          <ModalContent closeModal={() => setIsModalOpen(false)} />
        </Modal>
      </Content>
    </Container>
  );
}

export default Header;
