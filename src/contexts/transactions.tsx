//create a transaction context

import api from "@/api";
import { TTransaction } from "@/types/transaction";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type TransactionsContextData = {
  transactions: TTransaction[];
  fetchTransactions: (query?: string) => Promise<void>;
};

export const TransactionsContext = createContext({} as TransactionsContextData);

export function TransactionsProvider({ children }: PropsWithChildren) {
  const [transactions, setTransactions] = useState<TTransaction[]>([]);

  const fetchTransactions = async (query?: string) => {
    const response = await api.get("/transactions", {
      params: {
        q: query,
      },
    });

    const { data } = response;
    setTransactions(data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export const useTransactions = () => {
  return useContext(TransactionsContext);
};
