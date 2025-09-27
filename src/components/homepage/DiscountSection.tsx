import Image from "next/image";

const DiscountSection = () => {
  return (
    <div className="bg-white w-full min-h-[555px] flex items-center justify-center">
      <div className="max-w-[1440px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto p-4">
        <div className="relative w-full max-w-[328px] md:max-w-[440px] h-[328px] md:h-[470px] mx-auto">
          <Image
            src="/discount-1.svg"
            alt="Discount 1"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-[440px]  h-[328px] md:h-[470px] bg-[#F3F4F6] flex flex-col items-center justify-center text-center p-8 md:p-10 rounded-lg mx-auto">
          <h2 className="text-4xl font-semibold  mb-4 leading-10 text-[#1F2937]">
            Don’t Miss Out <br /> 50% OFF
          </h2>
          <p className="text-sm  text-[#6B7280] font-normal leading-5">
            Get 50% Off – Limited Time Only Refresh your wardrobe with modern
            essentials.
          </p>
          <button
            type="button"
            className="bg-[#3758F9] w-full md:w-[121px] text-white py-3 px-5 rounded-lg mt-4 md:mt-14 text-sm font-normal leading-5"
          >
            Shop Now
          </button>
        </div>
        <div className="relative w-full md:w-[440px] h-[328px] md:h-[470px] mx-auto">
          <Image
            src="/discount-2.svg"
            alt="Discount 1"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountSection;
