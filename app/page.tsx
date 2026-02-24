import Header from "./components/Header";
import Hero from "./components/Hero";
// import CoLocatedBar from "./components/CoLocatedBar";
// import ShowsCtaSection from "./components/ShowsCtaSection";
// import AwardBanner from "./components/AwardBanner";
import StatsGrid from "./components/StatsGrid";
import AboutSection from "./components/AboutSection";
import SpeakersSection from "./components/SpeakersSection";
// import TestimonialsSection from "./components/TestimonialsSection";
// import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <CoLocatedBar /> */}
        {/* <ShowsCtaSection /> */}
        {/* <AwardBanner /> */}
        <StatsGrid />
        <AboutSection />
        <SpeakersSection />
        {/* <TestimonialsSection /> */}
        {/* <NewsSection /> */}
      </main>
      <Footer />
    </>
  );
}
