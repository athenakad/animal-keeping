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
          className="shape top-[15%] left-[6%] w-48 drop-shadow-xl"
          style={{ animationDelay: '0s' }}
        />
        <img
          src="/icons/doggy-bro.svg"
          alt=""
          className="shape top-[40%] right-[10%] w-48 drop-shadow-xl"
          style={{ animationDelay: '9s' }}
        />
        <img
          src="/icons/care-amico.svg"
          alt=""
          className="shape top-[58%] left-[8%] w-48 drop-shadow-xl"
          style={{ animationDelay: '18s' }}
        />
        <img
          src="/icons/care-pana.svg"
          alt=""
          className="shape top-[12%] right-[2%] w-48 drop-shadow-xl"
          style={{ animationDelay: '27s' }}
        />
        <img
          src="/icons/care.svg"
          alt=""
          className="shape top-[70%] right-[5%] w-48 drop-shadow-xl"
          style={{ animationDelay: '27s' }}
        />
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
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