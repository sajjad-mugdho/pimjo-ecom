import type { Product, Order, StatsSummary } from "@/types";

// Start with a handful of hand-crafted products, then generate more so we have 30+ items
const seedProducts: Product[] = [
  {
    id: 1,
    name: "Macbook Pro 13",
    price: 250,
    stock: 12,
    category: "Laptop",
    image: "/images/product-1.jpg",
  },
  {
    id: 2,
    name: "Apple Watch Ultra",
    price: 999,
    stock: 5,
    category: "Smart Watch",
    image: "/images/product-2.jpg",
  },
  {
    id: 3,
    name: "iPhone 15 Pro Max",
    price: 349,
    stock: 2,
    category: "Smartphone",
    image: "/images/product-3.jpg",
  },
  {
    id: 4,
    name: "iPad Pro 3rd Gen",
    price: 1499,
    stock: 0,
    category: "Tablet",
    image: "/images/product-4.jpg",
  },
  {
    id: 5,
    name: "Airpods Pro 2nd Gen",
    price: 799,
    stock: 32,
    category: "Headphones",
    image: "/images/product-5.jpg",
  },
];

// Generate additional products programmatically so we have 30+ items for pagination/testing
const generated: Product[] = [];
const categories = [
  "Laptop",
  "Smartphone",
  "Tablet",
  "Headphones",
  "Accessories",
  "Camera",
  "Watch",
];
const imgs = [
  "/images/product-1.jpg",
  "/images/product-2.jpg",
  "/images/product-3.jpg",
  "/images/product-4.jpg",
  "/images/product-5.jpg",
];

for (let i = 6; i <= 35; i++) {
  const base = i % 5;
  generated.push({
    id: i,
    name: `Product ${i} ${i % 2 === 0 ? "Pro" : "Air"}`,
    price: Math.round((50 + i * 37) % 1500),
    stock: (i * 3) % 40,
    category: categories[i % categories.length],
    image: imgs[base],
  });
}

export const mockProducts: Product[] = [...seedProducts, ...generated];

export const mockOrders: Order[] = [
  {
    id: 101,
    product: "Macbook Pro 13",
    category: "Laptop",
    status: "Delivered",
    type: "Online",
    price: "$250.00",
    image: "/images/product-1.jpg",
    customer: "Alice",
    date: "2025-09-20",
  },
  {
    id: 102,
    product: "Apple Watch Ultra",
    category: "Smart Watch",
    status: "Pending",
    type: "In-store",
    price: "$999.00",
    image: "/images/product-2.jpg",
    customer: "Bob",
    date: "2025-09-21",
  },
  {
    id: 103,
    product: "iPhone 15 Pro Max",
    category: "Smartphone",
    status: "Delivered",
    type: "Online",
    price: "$349.00",
    image: "/images/product-3.jpg",
    customer: "Eve",
    date: "2025-09-22",
  },
  {
    id: 104,
    product: "iPad Pro 3rd Gen",
    category: "Tablet",
    status: "Cancelled",
    type: "In-store",
    price: "$1,499.00",
    image: "/images/product-4.jpg",
    customer: "John",
    date: "2025-09-23",
  },
  {
    id: 105,
    product: "Airpods Pro 2nd Gen",
    category: "Headphones",
    status: "Delivered",
    type: "Online",
    price: "$799.00",
    image: "/images/product-5.jpg",
    customer: "Jane",
    date: "2025-09-24",
  },
];

export const mockStats: StatsSummary = {
  totalOrders: 5359,
  revenue: 128450,
  customers: 3782,
  todaysEarned: 3287,
  changePercent: 10,
  monthlySales: [
    { month: "Jan", sales: 500 },
    { month: "Feb", sales: 750 },
    { month: "Mar", sales: 400 },
    { month: "Apr", sales: 620 },
    { month: "May", sales: 350 },
    { month: "Jun", sales: 540 },
    { month: "Jul", sales: 560 },
    { month: "Aug", sales: 700 },
    { month: "Sep", sales: 480 },
    { month: "Oct", sales: 610 },
    { month: "Nov", sales: 520 },
    { month: "Dec", sales: 450 },
  ],
};
