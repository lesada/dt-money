import { Container } from "./styles";

function Table() {
  return (
    <Container>
      <tbody>
        <tr>
          <td>Website development</td>
          <td className="income">$ 500.00</td>
          <td>Development</td>
          <td>20/02/2022</td>
        </tr>
        <tr>
          <td>Website development</td>
          <td className="income">$ 500.00</td>
          <td>Development</td>
          <td>20/02/2022</td>
        </tr>
        <tr>
          <td> Coffee Latte</td>
          <td className="outcome">- $ 500.00</td>
          <td>Food</td>
          <td>20/02/2022</td>
        </tr>
        <tr>
          <td>Website development</td>
          <td className="income">$ 500.00</td>
          <td>Development</td>
          <td>20/02/2022</td>
        </tr>
      </tbody>
    </Container>
  );
}

export default Table;
