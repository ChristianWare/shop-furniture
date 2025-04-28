import AboutSection from "@/components/homePage/AboutSection/AboutSection";
import Categories from "@/components/homePage/Categories/Categories";
import Discounts from "@/components/homePage/Discounts/Discounts";
import Hero from "@/components/homePage/Hero/Hero";
import MeetUs from "@/components/homePage/MeetUs/MeetUs";
import Reasons from "@/components/homePage/Reasons/Reasons";
import Reviews from "@/components/homePage/Reviews/Reviews";
import DynamicProductCollection from "@/components/shared/DynamicProductCollection/DynamicProductCollection";
import Faq from "@/components/shared/Faq/Faq";
import Footer from "@/components/shared/Footer/Footer";
import Shipping from "@/components/shared/Shipping/Shipping";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <Reasons />
      <DynamicProductCollection title='furniture' category='furniture' />
      <AboutSection />
      <MeetUs />
      <Discounts />
      <Reviews />
      <Shipping />
      <Faq />
      <Footer />
    </main>
  );
}
