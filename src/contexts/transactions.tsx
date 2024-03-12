import api from "@/api";
import { TTransaction } from "@/types/transaction";
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type TransactionsContextData = {
  transactions: TTransaction[];
  setTransactions: React.Dispatch<React.SetStateAction<TTransaction[]>>;
  fetchTransactions: (query?: string) => Promise<void>;
};

export const TransactionsContext = createContext({} as TransactionsContextData);

export function TransactionsProvider({ children }: PropsWithChildren) {
  const [transactions, setTransactions] = useState<TTransaction[]>([]);

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get("/transactions", {
      params: {
        q: query,
        _sort: "createdAt",
        _order: "desc",
      },
    });

    const { data } = response;
    setTransactions(data);
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const contextValue = useMemo(() => {
    return { transactions, fetchTransactions, setTransactions };
  }, [transactions, fetchTransactions, setTransactions]);

  return (
    <TransactionsContext.Provider value={contextValue}>
      {children}
    </TransactionsContext.Provider>
  );
}

export const useTransactions = () => {
  return useContext(TransactionsContext);
};
