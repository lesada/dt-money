import { MagnifyingGlass } from "phosphor-react";
import { Button, Container, Input } from "./styles";

function Search() {
  return (
    <Container>
      <Input placeholder="Search for transactions" />
      <Button>
        <MagnifyingGlass /> Search
      </Button>
    </Container>
  );
}

export default Search;
