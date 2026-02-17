
import './App.css'
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import { Toaster } from 'react-hot-toast';
import Footer from './Components/Footer'
import Header from './Components/Header'
import HomePage from './Pages/HomePage'
import WhySolarPage from './Pages/WhySolarPage';
import ServicesPage from './Pages/ServicesPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import WhatsAppButton from './Components/WhatsAppButton';
import TestmonialsPage from './Pages/TestmonialsPage';
import FAQs from './Components/FAQs';
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsConditions from './Components/TermsConditions';

function App() {

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/why_solar' element={<WhySolarPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/testimonials' element={<TestmonialsPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/faq' element={<FAQs />} />
        <Route path='/privacy_policy' element={<PrivacyPolicy />} />
        <Route path='/terms' element={<TermsConditions />} />
      </Routes>
      <Footer />

      <WhatsAppButton />
    </>
  )
}

export default App
