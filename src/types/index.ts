export interface Spending {
  title: string;
  amount: number;
  description: string;
}

export interface User {
  username: string;
  password?: string;
  spending: [Spending];
}
