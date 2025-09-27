import Image from "next/image";

type Category = {
  id: number;
  title: string;
  count: number;
  image: string;
  alt: string;
};

const categories: Category[] = [
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

const CategorySection = () => {
  return (
    <section className="flex items-center bg-[#F3F4F6] w-full justify-center  mx-auto min-h-[700px]">
      <div className="max-w-[1280px] w-full mx-auto p-8">
        <div className="max-w-[570px]">
          <h2 className="text-5xl font-semibold mb-6 text-left leading-12 text-[#1F2937]">
            Shop by Category
          </h2>

          <p className="text-[16px] text-left leading-7 text-[#6B7280] ">
            Explore our curated selection of products across premium categories,
            from everyday essentials to exclusive limited collections.
          </p>
        </div>

        {/* categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white p-2 rounded-2xl w-[224px] h-[292px]"
            >
              <div className="relative w-full h-[188px] mb-4">
                <Image
                  src={cat.image}
                  alt={cat.alt}
                  fill
                  className="object-cover rounded-[8px]"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-y-2">
                <h3 className="text-[16px] font-semibold text-[#111827] leading-6">
                  {cat.title}
                </h3>
                <p className="text-[16px] text-[#6B7280] font-medium">
                  {cat.count} Products
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
