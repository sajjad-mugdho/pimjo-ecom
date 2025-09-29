export type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
  image: string;
};

export type Order = {
  id: number;
  product: string;
  category: string;
  status: "Delivered" | "Pending" | "Cancelled";
  type?: string;
  price: string;
  image: string;
  customer?: string;
  date?: string;
};

export type StatsSummary = {
  totalOrders: number;
  revenue: number;
  customers: number;
  todaysEarned: number;
  changePercent: number;
  monthlySales: { month: string; sales: number }[];
};

export type ApiListResponse<T> = { items: T[] };
