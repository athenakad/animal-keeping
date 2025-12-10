import React from 'react';
import { PawPrint, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-emerald-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">

        {/* 1) Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <PawPrint className="w-6 h-6 text-sky-600" />
            <span className="text-lg font-bold">MyAnimal.gr</span>
          </div>
          <p className="text-sm">
            Μια click-α από την τέλεια μέρα του ζώου σου.
          </p>
        </div>

        {/* 2) Quick links */}
        <div>
          <h3 className="font-semibold mb-3">Γρήγορη πλοήγηση</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/blog" className="hover:text-sky-600 transition">Άρθρα</a></li>
            <li><a href="/sitters" className="hover:text-sky-600 transition">Sitters</a></li>
            <li><a href="/faq" className="hover:text-sky-600 transition">FAQ</a></li>
            <li><a href="/contact" className="hover:text-sky-600 transition">Επικοινωνία</a></li>
          </ul>
        </div>

        {/* 3) Contact */}
        <div>
          <h3 className="font-semibold mb-3">Επικοινωνία</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+30210xxxxxxxx" className="hover:text-sky-600 transition">
                (+30) 210 xxx xxxx
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@myanimal.gr" className="hover:text-sky-600 transition">
                info@myanimal.gr
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Αθήνα, Ελλάδα</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-emerald-200 dark:border-gray-800 mt-6 pt-4 text-center text-xs text-gray-500 dark:text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} MyAnimal.gr ·
          <a href="/privacy" className="ml-1 hover:text-sky-600">Privacy</a> ·
          <a href="/terms" className="ml-1 hover:text-sky-600">Terms</a>
        </p>
      </div>
    </footer>
  );
}