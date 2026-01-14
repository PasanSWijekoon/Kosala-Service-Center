import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';
import BodyWashVacuumInterior from './pages/BodyWashVacuumInterior';
import UndercarriageWash from './pages/UndercarriageWash';
import LightVehicleFullService from './pages/LightVehicleFullService';
import HeavyVehicleFullService from './pages/HeavyVehicleFullService';
import InteriorDetailing from './pages/InteriorDetailing';
import VehicleAccessories from './pages/VehicleAccessories';
import VehicleCutPolish from './pages/VehicleCutPolish';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { useEffect } from 'react';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
       duration: 1000,
       easing: 'ease-in-out',
       once: true,
       mirror: false
    });
  }, []);

  const Layout = () => (
    <>
      <Header />
      <Outlet />
      <Footer />
      <WhatsAppButton />
    </>
  );

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/body-wash-vacuum-interior" element={<BodyWashVacuumInterior />} />
          <Route path="/undercarriage-wash" element={<UndercarriageWash />} />
          <Route path="/light-vehicle-full-service" element={<LightVehicleFullService />} />
          <Route path="/heavy-vehicle-full-service" element={<HeavyVehicleFullService />} />
          <Route path="/interior-detailing" element={<InteriorDetailing />} />
          <Route path="/vehicle-accessories" element={<VehicleAccessories />} />
          <Route path="/vehicle-cut-polish" element={<VehicleCutPolish />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
