export type TTransaction = {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  value: number;
  createdAt: string;
};
