import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint } from 'lucide-react';   // αφαίρεσα Menu, X
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  const navLinks = [
    { label: 'Άρθρα', to: '/articles' },
    { label: 'Sitters', to: '/sitters' },
    { label: 'Σχετικά με εμάς', to: '/us' },
    { label: 'Πως λειτουργεί', to: '/works' },
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
              <Link to="/my-bookings" className="text-sky-700 hover:text-sky-600">
                Οι Κρατήσεις μου
              </Link>
              <button onClick={logout} className="text-sky-700 hover:text-red-600">
                Έξοδος
              </button>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login" className="text-sky-700 hover:text-sky-600">
                Σύνδεση
              </Link>
              <Link
                to="/register"
                className="bg-emerald-500 text-white px-3 py-1.5 rounded-lg hover:text-sky-600 transition"
              >
                Εγγραφή
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;