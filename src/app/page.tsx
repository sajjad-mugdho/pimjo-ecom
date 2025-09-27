import CategorySection from "@/components/homepage/CategorySection";
import DiscountSection from "@/components/homepage/DiscountSection";
import HeroSection from "@/components/homepage/HeroSection";
import HighlightSection from "@/components/homepage/HighlightSection";
import TestimonialSection from "@/components/homepage/TestimonialSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <HighlightSection />
      <TestimonialSection />
      <DiscountSection />
    </>
  );
}
