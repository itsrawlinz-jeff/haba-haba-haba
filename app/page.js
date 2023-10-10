import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClubFeatures from "@/components/ClubFeatures";
import Events from "@/components/Events";
import Testimonials from "@/components/Testimonials";
import ImageGallery from "@/components/ImageGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="h-full">
      <main className="bg-[url('/images/hero-section.webp')] h-full w-full bg-cover bg-no-repeat">
        <Navbar className="text-cultured" />
        <HeroSection />
      </main>
      <ClubFeatures />
      <Events />
      <Testimonials />
      <ImageGallery />
      <Footer />
    </div>
  );
}
