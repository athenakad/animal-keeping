import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

/* ------- σελίδες ------- */
import Home from './pages/Home';
import Profile from './pages/Profile';
import MyBookings from './pages/MyBookings';
import NotFound from './pages/NotFound';
import Articles from './pages/Articles';
import Works from './pages/Sitters';
import Sitters from './pages/Works';
import Us from './pages/Us';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Areas from './pages/Areas';
import AreaSitters from './pages/AreaSitters';

/* ------- components ------- */
import Login from './components/auth/Login.jsx';
import Register from './components/auth/Register.jsx';
import ForgotPassword from './components/auth/ForgotPassword.jsx';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

function App() {
  return (
    <AuthProvider>
   <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
  <img
    src="/icons/poop.svg"
    alt=""
    className="absolute w-24 sm:w-32 md:w-48 top-[8%] sm:top-[10%] md:top-[15%] left-[4%] sm:left-[5%] md:left-[6%] drop-shadow-xl"
    style={{ animationDelay: '0s' }}
  />
  <img
    src="/icons/doggy-bro.svg"
    alt=""
    className="absolute w-24 sm:w-32 md:w-48 top-[25%] sm:top-[35%] md:top-[40%] right-[5%] sm:right-[8%] md:right-[10%] drop-shadow-xl"
    style={{ animationDelay: '9s' }}
  />
  <img
    src="/icons/care-amico.svg"
    alt=""
    className="absolute w-24 sm:w-32 md:w-48 top-[50%] sm:top-[55%] md:top-[58%] left-[4%] sm:left-[6%] md:left-[8%] drop-shadow-xl"
    style={{ animationDelay: '18s' }}
  />
  <img
    src="/icons/care-pana.svg"
    alt=""
    className="absolute w-24 sm:w-32 md:w-48 top-[5%] sm:top-[10%] md:top-[12%] right-[2%] sm:right-[3%] md:right-[4%] drop-shadow-xl"
    style={{ animationDelay: '27s' }}
  />
  <img
    src="/icons/care.svg"
    alt=""
    className="absolute w-24 sm:w-32 md:w-48 top-[60%] sm:top-[65%] md:top-[70%] right-[5%] sm:right-[6%] md:right-[8%] drop-shadow-xl"
    style={{ animationDelay: '27s' }}
  />
</div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/*" element={<Articles />} />
        <Route path="/sitters" element={<Sitters />} />
        <Route path="/works" element={<Sitters />} />
        <Route path="/us" element={<Us />} />
        <Route path="/areas" element={<Areas />} />
        <Route path="/areas/:slug" element={<AreaSitters />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;