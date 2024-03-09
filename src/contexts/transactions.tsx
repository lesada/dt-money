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
};

export const TransactionsContext = createContext({} as TransactionsContextData);

export function TransactionsProvider({ children }: PropsWithChildren) {
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
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export const useTransactions = () => {
  return useContext(TransactionsContext);
};
