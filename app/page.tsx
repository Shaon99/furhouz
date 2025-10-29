import Header from '@/components/global/Header';
import WhyChooseSection from '@/components/home/WhyChoose';
import FurHouzAboutSlice from '@/components/home/FurHouzAboutSlice';
import OurLocations from '@/components/home/OurLocations';
import FurHouzQualitySection from '@/components/home/FurHouzQualitySection';
import FurHouzTestimonials from '@/components/home/FurHouzTestimonials';
import Banner from '@/components/home/Banner';
import FurnishedAppartment from '@/components/home/FurnishedAppartment';
import SpecialFacilities from '@/components/home/SpecialFacilities';
import PrimeLocations from '@/components/home/PrimeLocations';
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <WhyChooseSection />
        <OurLocations />
        <FurHouzAboutSlice />
        <FurHouzQualitySection />
        <FurHouzTestimonials />
        <Banner />
        <FurnishedAppartment />
        <SpecialFacilities />
        <PrimeLocations />
      </main>
    </div>
  );
}