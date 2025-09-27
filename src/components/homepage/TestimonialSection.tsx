import Image from "next/image";

const TestimonialSection = () => {
  const items = [
    {
      id: 1,
      name: "Kathryn Murphy",
      role: "CEO",
      image: "/avatar-1.png",
      testimonial:
        "“Working with this team has been a game-changer — their attention to detail, creativity, and commitment to deadlines exceeded every expectation I had.”",
    },
    {
      id: 2,
      name: "Theresa Webb",
      role: "Web Designer",
      image: "/avatar-2.png",
      testimonial:
        "“What impressed me most wasn’t just the design, but how deeply they cared about delivering something that made a difference for our users.”",
    },
    {
      id: 3,
      name: "Jerome Bell",
      role: "Marketing Coordinator",
      image: "/avatar-3.png",
      testimonial:
        "“From the initial consultation to the final delivery, the process was seamless and incredibly professional — I’ve never felt more confident in a partnership.”",
    },
  ];
  return (
    <section className="flex items-center bg-[#F3F4F6] w-full justify-center  mx-auto min-h-[700px]">
      <div className="max-w-[1280px] w-full p-8">
        <div className=" max-w-[112px] px-3 py-1 bg-[#3758F90D] text-[#3758F9] rounded-[16px] flex items-center justify-center text-[16px] font-medium z-20">
          Testimonials
        </div>
        <div className="max-w-[600px] mt-6">
          <h2 className="text-5xl font-semibold mb-6 leading-12 text-[#1F2937]">
            Hear from Our Happy Customers
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white w-[392px] h-[264px] p-6 rounded-2xl flex flex-col items-start text-left"
            >
              {/* reviewer stars */}
              <div className="flex items-center mb-6">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.235 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                  </svg>
                ))}
              </div>

              <p className="text-[#6B7280] font-normal leading-6 mb-6">
                {item.testimonial}
              </p>

              <div className="flex items-center gap-2">
                {/* reviewer image */}
                <Image
                  src={item.image}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="w-12 h-12rounded-full"
                />
                <div className="">
                  <h3 className="text-md font-medium text-[#374151] leading-6">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#6B7280] font-normal leading-5">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
