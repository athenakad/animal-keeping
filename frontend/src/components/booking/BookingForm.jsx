import React, { useState } from 'react';
import DateTimePicker from './DateTimePicker';
import OwnerInfo from './OwnerInfo';
import PetInfo from './PetInfo';
import BookingConfirmation from './BookingConfirmation';
import { Calendar, User, PawPrint } from 'lucide-react';
import Button from '../common/Button';

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    ownerName: '',
    ownerEmail: '',
    ownerPhone: '',
    petName: '',
    petType: '',
    petBreed: '',
    petAge: '',
    specialNeeds: '',
    petPhoto: null
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const updateBookingData = (data) => {
    setBookingData(prev => ({ ...prev, ...data }));
  };

  const handleSubmit = async () => {
    try {
      // TODO: API call to backend
      console.log('Submitting booking:', bookingData);
      setShowConfirmation(true);
    } catch (error) {
      console.error('Booking error:', error);
    }
  };

  const isStepValid = () => {
    if (step === 1) return bookingData.date && bookingData.time;
    if (step === 2) return bookingData.ownerName && bookingData.ownerEmail && bookingData.ownerPhone;
    if (step === 3) return bookingData.petName && bookingData.petType;
    return false;
  };

  const resetForm = () => {
    setBookingData({
      date: '', time: '', ownerName: '', ownerEmail: '', ownerPhone: '',
      petName: '', petType: '', petBreed: '', petAge: '', specialNeeds: '', petPhoto: null
    });
    setStep(1);
    setShowConfirmation(false);
  };

  if (showConfirmation) {
    return <BookingConfirmation bookingData={bookingData} onReset={resetForm} />;
  }

  const steps = [
    { number: 1, label: 'Ημερομηνία', icon: Calendar },
    { number: 2, label: 'Στοιχεία', icon: User },
    { number: 3, label: 'Κατοικίδιο', icon: PawPrint }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center space-x-4">
          {steps.map((s, idx) => (
            <React.Fragment key={s.number}>
              <div className="flex flex-col items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full font-semibold transition-colors ${
                  step >= s.number ? 'bg-sky-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {step > s.number ? '✓' : s.number}
                </div>
                <span className="text-xs mt-2 text-gray-600">{s.label}</span>
              </div>
              {idx < steps.length - 1 && (
                <div className={`w-16 h-1 mb-6 transition-colors ${
                  step > s.number ? 'bg-sky-600' : 'bg-gray-300'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-white rounded-2xl shadow-2xl p-8">
        {step === 1 && <DateTimePicker data={bookingData} onUpdate={updateBookingData} />}
        {step === 2 && <OwnerInfo data={bookingData} onUpdate={updateBookingData} />}
        {step === 3 && <PetInfo data={bookingData} onUpdate={updateBookingData} />}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {step > 1 && (
            <Button variant="outline" onClick={() => setStep(step - 1)}>
              Πίσω
            </Button>
          )}

          <div className="ml-auto">
            {step < 3 ? (
              <Button
                onClick={() => setStep(step + 1)}
                disabled={!isStepValid()}
              >
                Συνέχεια
              </Button>
            ) : (
              <Button
                variant="success"
                onClick={handleSubmit}
                disabled={!isStepValid()}
              >
                Ολοκλήρωση Κράτησης
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;