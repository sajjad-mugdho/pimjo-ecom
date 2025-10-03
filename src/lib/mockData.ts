import type {
  Product,
  Order,
  StatsSummary,
  Category,
  HighlightProduct,
  Testimonial,
  HeroProduct,
  DiscountCard,
} from "@/types";

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

// Homepage mock data
export const mockHeroProducts: HeroProduct[] = [
  {
    id: 1,
    brand: "samsung",
    title: "Galaxy S24 Ultra 5G",
    description:
      "Galaxy AI is here | Pro-grade camera, seamless 5G, and revolutionary AI – Redefine possibilities.",
    price: "Buy Now $899",
    image: "/hero-mobile.svg",
    alt: "Galaxy S24 Ultra 5G",
    type: "main",
  },
  {
    id: 2,
    brand: "xiaomi",
    title: "Smart Security Home Camera",
    description: "",
    price: "Buy Now",
    image: "/web-cam.svg",
    alt: "hero-1",
    type: "side",
  },
  {
    id: 3,
    brand: "redmi",
    title: "Smart Watch 5 lite",
    description: "",
    price: "Buy Now",
    image: "/mi-watch.svg",
    alt: "hero-1",
    type: "side",
  },
];

export const mockCategories: Category[] = [
  {
    id: 1,
    title: "DSLR Cameras",
    count: 50,
    image: "/canon-cam.svg",
    alt: "canon-camera",
  },
  {
    id: 2,
    title: "Wireless Earbuds",
    count: 45,
    image: "/airbuds.svg",
    alt: "earbuds",
  },
  {
    id: 3,
    title: "Wristwatch",
    count: 120,
    image: "/watch.png",
    alt: "smart-watch",
  },
  {
    id: 4,
    title: "Skyflyer Drone",
    count: 18,
    image: "/drone.svg",
    alt: "drone",
  },
  {
    id: 5,
    title: "Smart Speaker",
    count: 75,
    image: "/smart-speaker.svg",
    alt: "smart-speaker",
  },
];

export const mockHighlightProducts: HighlightProduct[] = [
  {
    id: 1,
    title: "White Jacket",
    price: "$249.00",
    description: "Lightweight & water-resistant",
    image: "/white-jacket.svg",
    alt: "white-jacket",
    isHot: false,
  },
  {
    id: 2,
    title: "Tote Bag",
    price: "$299.00",
    description: "Spacious & stylish",
    image: "/teto-bag.svg",
    alt: "smart-watch",
    isHot: true,
  },
  {
    id: 3,
    title: "Beige Cap",
    price: "$299.00",
    description: "Soft breathable fabric",
    image: "/cap.svg",
    alt: "drone",
    isHot: false,
  },
  {
    id: 4,
    title: "Qua Watch",
    price: "$289.00",
    description: "Modern rubber sole",
    image: "/watch-2.svg",
    alt: "earbuds",
    isHot: false,
  },
];

export const mockTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Kathryn Murphy",
    role: "CEO",
    image: "/avatar-1.png",
    testimonial:
      "Working with this team has been a game-changer — their attention to detail, creativity, and commitment to deadlines exceeded every expectation I had.",
    rating: 5,
  },
  {
    id: 2,
    name: "Theresa Webb",
    role: "Web Designer",
    image: "/avatar-2.png",
    testimonial:
      "What impressed me most wasn't just the design, but how deeply they cared about delivering something that made a difference for our users.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jerome Bell",
    role: "Marketing Coordinator",
    image: "/avatar-3.png",
    testimonial:
      "From the initial consultation to the final delivery, the process was seamless and incredibly professional — I've never felt more confident in a partnership.",
    rating: 5,
  },
];

export const mockDiscountCards: DiscountCard[] = [
  {
    id: 1,
    type: "image",
    image: "/discount-1.svg",
    alt: "Discount 1",
  },
  {
    id: 2,
    type: "content",
    title: "Don't Miss Out 50% OFF",
    description:
      "Get 50% Off – Limited Time Only Refresh your wardrobe with modern essentials.",
    discount: "50% OFF",
    buttonText: "Shop Now",
  },
  {
    id: 3,
    type: "image",
    image: "/discount-2.svg",
    alt: "Discount 2",
  },
];
