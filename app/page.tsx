import Header from "./components/Header";
import Hero from "./components/Hero";
// import CoLocatedBar from "./components/CoLocatedBar";
// import ShowsCtaSection from "./components/ShowsCtaSection";
// import AwardBanner from "./components/AwardBanner";
// import StatsGrid from "./components/StatsGrid";
// import AboutSection from "./components/AboutSection";
import SpeakersSection from "./components/SpeakersSection";
import SponsorsSection from "./components/SponsorsSection";
// import TestimonialsSection from "./components/TestimonialsSection";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";
import CountdownBar from "./components/CountdownBar";
import TracksSection from "./components/TracksSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TracksSection />
        {/* <CoLocatedBar /> */}
        {/* <ShowsCtaSection /> */}
        {/* <AwardBanner /> */}
        {/* <StatsGrid /> */}
        {/* <AboutSection /> */}
        <SpeakersSection />
        <SponsorsSection />
        {/* <TestimonialsSection /> */}
        <NewsSection />
      </main>
      <Footer />
      {/* <CountdownBar /> */}
    </>
  );
}
