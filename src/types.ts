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

// Homepage data types
export type Category = {
  id: number;
  title: string;
  count: number;
  image: string;
  alt: string;
};

export type HighlightProduct = {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
  alt: string;
  isHot?: boolean;
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  testimonial: string;
  rating: number;
};

export type HeroProduct = {
  id: number;
  brand: string;
  title: string;
  description: string;
  price: string;
  image: string;
  alt: string;
  type: "main" | "side";
};

export type DiscountCard = {
  id: number;
  title?: string;
  description?: string;
  discount?: string;
  buttonText?: string;
  image?: string;
  alt?: string;
  type: "image" | "content";
};
