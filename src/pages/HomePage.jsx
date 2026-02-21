import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CertificationsSection from '../components/CertificationsSection';
import GlobalSupplySection from '../components/GlobalSupplySection';
import ProductsSection from '../components/ProductsSection';
import SupplySolutionsSection from '../components/SupplySolutionsSection';
import QualitySection from '../components/QualitySection';
import GlobalReachSection from '../components/GlobalReachSection';
import StatsSection from '../components/StatsSection';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import FloatingButtons from '../components/FloatingButtons';

const HomePage = () => {
  const newLocal = <StatsSection />;
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <CertificationsSection />
      <GlobalSupplySection />
      <ProductsSection />
      <SupplySolutionsSection />
      <QualitySection />
      {/* <GlobalReachSection /> */}
      {newLocal}
      <Footer />
      <CookieConsent />
      <FloatingButtons />
    </div>
  );
};

export default HomePage;
