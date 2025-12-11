import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

/* ------- σελίδες ------- */
import Home           from './pages/Home';
import Profile        from './pages/Profile';
import MyBookings     from './pages/MyBookings';
import NotFound       from './pages/NotFound';
import Articles       from './pages/Articles';
import Sitters        from './pages/Sitters';
import Booking        from './pages/Booking';
import Contact        from './pages/Contact';
import Areas      from './pages/Areas';
import AreaSitters from './pages/AreaSitters';

/* ------- components ------- */
import Login           from './components/auth/Login.jsx';
import Register        from './components/auth/Register.jsx';
import ForgotPassword  from './components/auth/ForgotPassword.jsx';
import Header          from './components/common/Header';
import Footer          from './components/common/Footer';

function App() {
  return (
    <AuthProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/sitters" element={<Sitters />} />
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
      <Footer/>
    </AuthProvider>
  );
}

export default App;