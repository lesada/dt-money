import { useTransactions } from "@/contexts/transactions";
import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchSchema, searchSchema } from "./schema";
import { Button, Container, Input } from "./styles";

function Search() {
  const { fetchTransactions } = useTransactions();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchSchema>({
    resolver: zodResolver(searchSchema),
  });

  const onSubmit = async (data: SearchSchema) => {
    await fetchTransactions(data.search);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Search for transactions" {...register("search")} />
      <Button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass />
      </Button>
    </Container>
  );
}

export default Search;
