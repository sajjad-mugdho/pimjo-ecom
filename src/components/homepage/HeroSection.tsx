import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white w-full justify-center  mx-auto p-4 md:px-0 min-h-[700px]">
      <div className="bg-[#111827] max-w-[900px] w-full min-h-[540px] flex flex-col md:flex-row items-center md:justify-between gap-y-6 rounded-[12px] px-6 md:px-14 py-8">
        {/* large card */}
        <div className="flex-1 flex flex-col gap-5 items-center text-center md:items-start md:text-left">
          <span className="uppercase text-[#9CA3AF] font-medium leading-5 text-sm">
            samsung
          </span>
          <h1 className="text-[28px] md:text-4xl font-semibold text-white leading-8 md:leading-10">
            Galaxy S24 Ultra 5G
          </h1>
          <p className="text-[16px] text-[#9CA3AF] leading-7 font-normal max-w-md mx-auto md:mx-0">
            {" "}
            Galaxy AI is here | Pro-grade camera, seamless 5G, and revolutionary
            AI – Redefine possibilities.
          </p>

          <button className="px-4 py-3 bg-white mt-6 md:mt-10 hover:bg-white/70 rounded-[8px] w-full md:w-[150px] text-[#1F2937] font-medium text-[16px] leading-6 mx-auto md:mx-0">
            Buy Now $899
          </button>
        </div>
        {/* image area */}
        <div className="flex-none flex justify-center mt-6 md:mt-0">
          {/* fixed container so the image always renders at the expected UI size */}
          <div className="relative w-[220px] h-[220px] md:w-[300px] md:h-[300px]">
            <Image
              src="/hero-mobile.svg"
              alt="Galaxy S24 Ultra 5G"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      {/* small cards */}
      <div className="flex flex-col gap-4 mt-6 md:ml-10 md:mt-0 items-center md:items-start">
        <div className="flex items-center justify-center p-6 max-w-[370px] w-full mx-auto md:mx-0 h-[260px] bg-[#F3F4F6] rounded-[12px]">
          <div className="flex-1 ">
            <div className="flex flex-col gap-y-2">
              <span className="uppercase font-normal text-[14px] leading-5 text-[#6B7280]">
                xiaomi
              </span>
              <h3 className="text-[20px] font-semibold leading-7 text-[#374151] ">
                Smart Security Home Camera
              </h3>
            </div>
            <button className="bg-[#3758F9] py-3 px-4 text-white rounded-[8px] text-sm font-normal leading-5 mt-12">
              Buy Now
            </button>
          </div>
          <div className="flex-none">
            {/* small image: fixed box and use fill for predictable sizing */}
            <div className="relative w-[150px] h-[200px]">
              <Image
                src="/web-cam.svg"
                alt="hero-1"
                fill
                className="rounded-[12px] object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 max-w-[370px] w-full mx-auto md:mx-0 h-[260px] bg-[#F3F4F6] rounded-[12px]">
          <div className="flex-1 ">
            <div className="flex flex-col gap-y-2">
              <span className="uppercase font-normal text-[14px] leading-5 text-[#6B7280]">
                redmi
              </span>
              <h3 className="text-[20px] font-semibold leading-7 text-[#374151] ">
                Smart Watch <br /> 5 lite
              </h3>
            </div>
            <button className="bg-[#3758F9] py-3 px-4 text-white rounded-[8px] text-sm font-normal leading-5 mt-12">
              Buy Now
            </button>
          </div>
          <div className="flex-none">
            {/* small image: fixed box and use fill for predictable sizing */}
            <div className="relative w-[150px] h-[200px]">
              <Image
                src="/mi-watch.svg"
                alt="hero-1"
                fill
                className="rounded-[12px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
