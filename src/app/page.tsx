import Hero from "@/components/homePage/Hero/Hero";
import Reasons from "@/components/homePage/Reasons/Reasons";
import DynamicProductCollection from "@/components/shared/DynamicProductCollection/DynamicProductCollection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Reasons />
      <DynamicProductCollection title='Most recent' category='men' />
    </main>
  );
}
