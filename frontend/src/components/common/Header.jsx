import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, Menu, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: 'Άρθρα', to: '/articles' },
    { label: 'Η Ομάδα μας', to: '/sitters' },
//     { label: 'Κράτηση', to: '/booking' },
    { label: 'Επικοινωνία', to: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-sky-600">
          <PawPrint className="w-7 h-7" />
          <span className="text-xl font-semibold">MyAnimal.gr</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="text-sky-700 hover:text-sky-600 transition">
              {l.label}
            </Link>
          ))}

          {user ? (
            <>
              <Link to="/my-bookings" className="text-sky-700 hover:text-sky-600">Οι Κρατήσεις μου</Link>
              <button onClick={logout} className="text-sky-700 hover:text-red-600">Έξοδος</button>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login" className="text-sky-700 hover:text-sky-600">Σύνδεση</Link>
              <Link
                to="/register"
                className="bg-emerald-500 text-white px-3 py-1.5 rounded-lg hover:text-sky-600 transition"
              >
                Εγγραφή
              </Link>
            </div>
          )}
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-sky-700" onClick={() => setOpen((o) => !o)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-sm">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block text-sky-700 hover:text-sky-600">
              {l.label}
            </Link>
          ))}

          {user ? (
            <>
              <Link to="/my-bookings" onClick={() => setOpen(false)} className="block text-sky-700 hover:text-sky-600">Οι Κρατήσεις μου</Link>
              <button onClick={() => { logout(); setOpen(false); }} className="block text-red-600">Έξοδος</button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setOpen(false)} className="block text-sky-700 hover:text-sky-600">Σύνδεση</Link>
              <Link to="/register" onClick={() => setOpen(false)} className="block text-sky-600 font-semibold">Εγγραφή</Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;