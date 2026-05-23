import React from 'react'

import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";

import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import TopDestination from './pages/TopDestination'
import Footer from './components/Footer'
import Enquiry from './components/Enquiry'
import { Routes, Route } from 'react-router-dom'
import PopularPackages from './components/PopularPackages'
import VideoBanner from './components/VideoBanner'
import Newsletter from './components/NewsLetter'
import ExplorePackages from './pages/ExplorePackages'
import DomesticTours from './pages/DomesticTours';
import Transport from './pages/Transport';
import TransportBus from './pages/TransportBus';
import TransportCar from './pages/TransportCar';
import TransportVans from './pages/TransportVans';
import TransportLogistic from './pages/TransportLogistic';
import ExploreService from './pages/ExploreService';
import BookingService from './pages/BookingService';
import ComingSoon from './components/ComingSoon';
import Employment from './pages/Employment';
import Immigration from './pages/Immigration';
import BookingPage from './pages/BookingPage';
import InternationalTours from './pages/InternationalTours';
import TermsConditions from './components/TermsConditions';
import ScrollToTop from "./components/ScrollToTop";
import RefundCancellation from './components/RefundCancellation';
import FAQ from './components/FAQ';

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden text-white bg-black">
        <ScrollToTop/>

        {/* <NavBar/> */}

        <Routes>
          <Route element={<MainLayout/>}>
            <Route 
              path='/' 
              element={
                <>
                  <Home/>
                  <About/>
                  <TopDestination/>
                  <PopularPackages/>
                  {/* <VideoBanner/> */}
                  {/* <Newsletter/> */}
                  
                </>
              } 
            />
          </Route> 
          <Route path='/explorePackages' element={<ExplorePackages/>} />
          <Route path='/domesticTours' element={<DomesticTours/>} />
          <Route path='/internationalTours' element={<InternationalTours/>} />
          <Route path='/transport' element={<Transport/>} />
          <Route path='/transportBus' element={<TransportBus/>} />
          <Route path='/transportCar' element={<TransportCar/>} />
          <Route path='/transportVan' element={<TransportVans/>} />
          <Route path='/transportLogistic' element={<TransportLogistic/>} />
          <Route path='/exploreServices' element={<ExploreService/>} />
          <Route path='/bookingServices' element={<BookingService/>} />
          <Route path='/comingSoon' element={<ComingSoon/>} />
          <Route path='/employment' element={<Employment/>} />
          <Route path='/immigration' element={<Immigration/>} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/cancellation" element={<RefundCancellation />} />
          <Route path="/faq" element={<FAQ />} />
          <Route element={<AuthLayout/>}/>
        </Routes>

        <Footer/>

      </div>
    </>
  )
}

export default App