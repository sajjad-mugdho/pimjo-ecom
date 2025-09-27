import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
  alt: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "White Jacket",
    price: "$249.00",
    description: "Lightweight & water-resistant",
    image: "/white-jacket.svg",
    alt: "white-jacket",
  },
  {
    id: 2,
    title: "Tote Bag",
    price: "$299.00",
    description: "Spacious & stylish",
    image: "/teto-bag.svg",
    alt: "smart-watch",
  },
  {
    id: 3,
    title: "Beige Cap",
    price: "$299.00",
    description: "Soft breathable fabric",
    image: "/cap.svg",
    alt: "drone",
  },
  {
    id: 4,
    title: "Qua Watch",
    price: "$289.00",
    description: "Modern rubber sole",
    image: "/watch-2.svg",
    alt: "earbuds",
  },
];

const HighlightSection = () => {
  return (
    <section className="flex items-center bg-white w-full justify-center  mx-auto min-h-[850px]">
      <div className="max-w-[1280px] w-full mx-auto px:4 md:px-8 py-28">
        <div className="w-full flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-12 text-[#1F2937]">
            Handpicked Highlights
          </h2>

          <p className="text-[16px] max-w-[570px] leading-7 text-[#6B7280] ">
            Explore our curated selection of products across premium categories,
            from everyday essentials to exclusive limited collections.
          </p>
        </div>

        {/* categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-10">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white flex flex-col items-center justify-center gap-y-3 p-4 rounded-lg"
            >
              <div className="relative w-full max-w-[328px] md:max-w-[283px] min-h-[377px] md:h-[326px] group">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  className="object-cover rounded-[8px]"
                />

                {/* persistent hot badge for Tote Bag (product id 2) */}
                {p.id === 2 && (
                  <div className="absolute top-2 left-2 w-[80px] h-[28px] bg-[#FEF2F2] text-[#B91C1C] rounded-[16px] flex items-center justify-center text-sm font-medium z-20">
                    Hot Item
                  </div>
                )}

                {/* favorite icon - appears on image hover */}
                <button
                  aria-label="Save to favorites"
                  className="absolute top-2 right-2 w-11 h-11 bg-white border-[1px] border-[#D1D5DB] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow"
                >
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 0.5C33.8741 0.5 43.5 10.1259 43.5 22C43.5 33.8741 33.8741 43.5 22 43.5C10.1259 43.5 0.5 33.8741 0.5 22C0.5 10.1259 10.1259 0.5 22 0.5Z"
                      fill="white"
                    />
                    <path
                      d="M22 0.5C33.8741 0.5 43.5 10.1259 43.5 22C43.5 33.8741 33.8741 43.5 22 43.5C10.1259 43.5 0.5 33.8741 0.5 22C0.5 10.1259 10.1259 0.5 22 0.5Z"
                      stroke="#D1D5DB"
                    />
                    <path
                      d="M15.513 16.4185C13.8846 18.047 13.8846 20.6873 15.513 22.3158L21.1161 27.9189C21.6043 28.4071 22.3957 28.4071 22.8839 27.9189L28.487 22.3158C30.1155 20.6874 30.1155 18.0471 28.487 16.4186C26.8585 14.7901 24.2182 14.7901 22.5897 16.4186L22.0001 17.0083L21.4103 16.4185C19.7818 14.79 17.1415 14.79 15.513 16.4185Z"
                      stroke="#1F2937"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="w-full max-w-[328px] md:max-w-[283px]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[16px] font-medium text-[#1F2937] leading-6">
                    {p.title}
                  </h3>
                  <span className="text-[16px] font-medium text-[#1F2937] leading-6">
                    {p.price}
                  </span>
                </div>
                <p className="text-sm font-normal leading-5 text-[#6B7280]">
                  {p.description}
                </p>
              </div>

              <div className="w-full max-w-[328px]  md:max-w-[283px]">
                <button className="bg-white flex items-center justify-center gap-x-4 text-[#1F2937] hover:bg-[#3758F9] hover:border-none hover:text-white border-[1px] border-[#D1D5DB] w-full py-2 px-4 rounded-md">
                  <span className="text-current">
                    <svg
                      width="21"
                      height="19"
                      viewBox="0 0 21 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.816406 1H1.99696C2.74468 1 3.37822 1.55068 3.48234 2.29112L3.63429 3.37161M3.63429 3.37161L4.73641 11.2089C4.84053 11.9493 5.47407 12.5 6.22179 12.5L15.5833 12.5C16.1803 12.5 16.7205 12.146 16.9587 11.5986L19.626 5.47023C20.0572 4.4795 19.3312 3.37161 18.2507 3.37161H3.63429Z"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.2832 16.5H6.2932M14.8203 16.5H14.8303"
                        stroke="currentColor"
                        strokeWidth={3.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
