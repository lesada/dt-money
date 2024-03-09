import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchSchema, searchSchema } from "./schema";
import { Button, Container, Input } from "./styles";

function Search() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchSchema>({
    resolver: zodResolver(searchSchema),
  });

  const onSubmit = async (data: SearchSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Search for transactions" {...register("search")} />
      <Button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass /> Search
      </Button>
    </Container>
  );
}

export default Search;
