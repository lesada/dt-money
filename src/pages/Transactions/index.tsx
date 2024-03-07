import Header from "@/components/Header";
import Search from "./components/Search";
import Summary from "./components/Summary";
import Table from "./components/Table";

function Transactions() {
  return (
    <div>
      <Header />
      <main>
        <Summary />
        <section>
          <Search />
          <Table />
        </section>
      </main>
    </div>
  );
}

export default Transactions;
