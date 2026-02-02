
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
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Footer />

      <WhatsAppButton />
    </>
  )
}

export default App
