import Criteria from "@/components/home/Criteria";
import Footer from "@/components/home/Footer";
import GuideLine from "@/components/home/GuideLine";
import HeroSection from "@/components/home/HeroSection";
import Introduction from "@/components/home/Introduction";
import Partner from "@/components/home/Partner";
import Policy from "@/components/home/Policy";
import Questions from "@/components/home/Questions";
import Timeline from "@/components/home/Timeline";
import Trophy from "@/components/home/Trophy";

export default function Home() {
  return (
    <section className='w-full overflow-hidden min-h-screen'>
      <HeroSection />
      <Introduction />
      <GuideLine />
      <Criteria />
      <Questions />
      <Timeline />
      {/* <Partner /> */}
      <Trophy />
      <Policy />
      <Footer />
    </section>
  );
}
