import api from "@/api";
import Header from "@/components/Header";
import { TTransaction } from "@/types/transaction";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import Summary from "./components/Summary";
import Table from "./components/Table";

function Transactions() {
  const [transactions, setTransactions] = useState<TTransaction[]>([]);

  const getTransactions = async () => {
    const response = await api.get("/transactions");

    const { data } = response;
    setTransactions(data);
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Summary />
        <section>
          <Search />
          <Table transactions={transactions} />
        </section>
      </main>
    </div>
  );
}

export default Transactions;
