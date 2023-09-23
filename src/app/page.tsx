import Criteria from "@/components/home/Criteria";
import Footer from "@/components/home/Footer";
import GuideLine from "@/components/home/GuideLine";
import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import Introduction from "@/components/home/Introduction";
import Policy from "@/components/home/Policy";
import Questions from "@/components/home/Questions";
import Trophy from "@/components/home/Trophy";

export default function Home() {
  return (
    <section className='w-full overflow-hidden min-h-screen relative'>
      <Header />
      <HeroSection />
      <Introduction />
      <GuideLine />
      <Criteria />
      <Questions />
      {/* <Trophy />
      <Policy />
      <Footer />  */}
    </section>
  );
}
