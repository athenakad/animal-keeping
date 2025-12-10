import React from 'react';
import { CheckCircle, Calendar, Clock, User, PawPrint, Mail } from 'lucide-react';
import Button from '../common/Button';

const BookingConfirmation = ({ bookingData, onReset }) => {
  return (
    <div className="max-w-2xl mx-auto">
      {/* 1. Καθαρό λευκό πλαίσιο, ζεστό περίγραμμα */}
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100">

        {/* Success Icon */}
        <div className="mb-6">
          {/* 2. Απαλό sky-100 background + sky-400 εικονίδιο */}
          <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-sky-400" />
          </div>
          {/* 3. Μαλακό σκούρο γκρι τίτλος */}
          <h2 className="text-3xl font-bold text-slate-700 mb-2">Επιτυχής Κράτηση!</h2>
          <p className="text-slate-600">Η κράτησή σας έχει καταχωρηθεί με επιτυχία</p>
        </div>

        {/* Booking Details */}
        {/* 4. Αχνό γκρι φόντο, στρογγυλές γωνίες */}
        <div className="bg-slate-50 rounded-xl p-6 mb-6 text-left">
          <h3 className="font-semibold text-lg mb-4 text-slate-700">Στοιχεία Κράτησης</h3>

          <div className="space-y-3">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-sky-600 mr-3" />
              <span className="text-slate-700">
                <strong>Ημερομηνία:</strong> {new Date(bookingData.date).toLocaleDateString('el-GR')}
              </span>
            </div>

            <div className="flex items-center">
              <Clock className="w-5 h-5 text-sky-400 mr-3" />
              <span className="text-slate-700">
                <strong>Ώρα:</strong> {bookingData.time}
              </span>
            </div>

            <div className="flex items-center">
              <User className="w-5 h-5 text-sky-400 mr-3" />
              <span className="text-slate-700">
                <strong>Ιδιοκτήτης:</strong> {bookingData.ownerName}
              </span>
            </div>

            <div className="flex items-center">
              <PawPrint className="w-5 h-5 text-sky-400 mr-3" />
              <span className="text-slate-700">
                <strong>Κατοικίδιο:</strong> {bookingData.petName} ({bookingData.petType})
              </span>
            </div>
          </div>
        </div>

        {/* Email Notification */}
        {/* 5. Λευκό φόντο, λεπτό γκρι περίγραμμα, μαύρα γράμματα */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <Mail className="w-5 h-5 text-sky-400 mr-3 mt-0.5" />
            <p className="text-sm text-slate-700 text-left">
              Ένα email επιβεβαίωσης έχει σταλεί στο <strong className="text-slate-900">{bookingData.ownerEmail}</strong> με όλες τις λεπτομέρειες της κράτησής σας.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {/* 6. Λευκό κουμπί με λεπτό περίγραμμα και μαύρο κείμενο */}
          <Button variant="outline" onClick={onReset}>
            Νέα Κράτηση
          </Button>
          <Button variant="outline" onClick={() => window.location.href = '/my-bookings'}>
            Οι Κρατήσεις μου
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;