import AboutSection from "@/components/homePage/AboutSection/AboutSection";
import Discounts from "@/components/homePage/Discounts/Discounts";
import Hero from "@/components/homePage/Hero/Hero";
import Reasons from "@/components/homePage/Reasons/Reasons";
import Reviews from "@/components/homePage/Reviews/Reviews";
import DynamicProductCollection from "@/components/shared/DynamicProductCollection/DynamicProductCollection";
import Shipping from "@/components/shared/Shipping/Shipping";

export default function Home() {
  return (
    <main>
      <Hero />
      <Reasons />
      <DynamicProductCollection title='Most recent' category='men' />
      <AboutSection />
      <Discounts />
      <Reviews />
      <Shipping />
    </main>
  );
}
