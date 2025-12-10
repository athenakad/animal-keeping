import React from 'react';
import BookingForm from '../components/booking/BookingForm';
import { Info } from 'lucide-react';

const Booking = () => {
  return (
    // 1. Καθαρό λευκό background
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-10">
          {/* 2. Βαθύ σχεδόν-μαύρος τίτλος */}
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Νέα Κράτηση Ραντεβού
          </h1>
          {/* 3. Ζεστό γκρι υπότιτλος */}
          <p className="text-slate-600">
            Συμπληρώστε τα στοιχεία για να ολοκληρώσετε την κράτησή σας
          </p>
        </div>

        {/* Booking Form */}
        <BookingForm />

        {/* Info Box */}
        {/* 4. Λευκό φόντο, 1px γκρι περίγραμμα, μαύρο κείμενο */}
        <div className="mt-8 bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex items-start">
            <Info className="w-5 h-5 text-slate-900 mr-3 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-slate-900">
              <p className="font-semibold mb-2">Σημαντικές Πληροφορίες</p>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>Θα λάβετε email επιβεβαίωσης εντός 5 λεπτών</li>
                <li>Μπορείτε να ακυρώσετε/αλλάξετε την κράτηση έως 24 ώρες πριν</li>
                <li>Παρακαλούμε φέρτε το βιβλιάριο εμβολιασμού του κατοικιδίου σας</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;