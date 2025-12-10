import React, { useState, useEffect } from 'react';
import { Calendar, Clock, PawPrint, X, Edit } from 'lucide-react';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import { useAuth } from '../context/AuthContext';

const MyBookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);

  // Mock data - replace with API call
  useEffect(() => {
    const mockBookings = [
      {
        id: 1,
        date: '2024-12-15',
        time: '10:00',
        petName: 'Μπομπ',
        petType: 'Σκύλος',
        status: 'confirmed'
      },
      {
        id: 2,
        date: '2024-12-20',
        time: '14:00',
        petName: 'Μίνι',
        petType: 'Γάτα',
        status: 'pending'
      }
    ];
    setBookings(mockBookings);
  }, []);

  const handleCancelBooking = (bookingId) => {
    setBookings(bookings.filter(b => b.id !== bookingId));
    setShowCancelModal(false);
    setSelectedBooking(null);
  };

  const getStatusBadge = (status) => {
    const styles = {
      confirmed: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    const labels = {
      confirmed: 'Επιβεβαιωμένο',
      pending: 'Σε Αναμονή',
      cancelled: 'Ακυρωμένο'
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Συνδεθείτε για να δείτε τις κρατήσεις σας
          </h2>
          <Button onClick={() => window.location.href = '/login'}>
            Σύνδεση
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Οι Κρατήσεις μου</h1>
          <p className="text-gray-600">Διαχειριστείτε τις κρατήσεις σας</p>
        </div>

        {/* Bookings List */}
        {bookings.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Δεν έχετε κρατήσεις
            </h2>
            <p className="text-gray-600 mb-6">
              Κλείστε το πρώτο σας ραντεβού τώρα!
            </p>
            <Button onClick={() => window.location.href = '/booking'}>
              Νέα Κράτηση
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-grow">
                    <div className="flex items-center space-x-3 mb-3">
                      {getStatusBadge(booking.status)}
                      <span className="text-sm text-sky-500">
                        ID: #{booking.id}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5 text-sky-600" />
                        <div>
                          <p className="text-xs text-gray-500">Ημερομηνία</p>
                          <p className="font-semibold text-gray-800">
                            {new Date(booking.date).toLocaleDateString('el-GR')}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-sky-600" />
                        <div>
                          <p className="text-xs text-gray-500">Ώρα</p>
                          <p className="font-semibold text-gray-800">{booking.time}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <PawPrint className="w-5 h-5 text-sky-600" />
                        <div>
                          <p className="text-xs text-gray-500">Κατοικίδιο</p>
                          <p className="font-semibold text-gray-800">
                            {booking.petName} ({booking.petType})
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2 mt-4 md:mt-0">
                    <Button size="sm" variant="outline">
                      <Edit className="w-4 h-4 mr-1" />
                      Τροποποίηση
                    </Button>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => {
                        setSelectedBooking(booking);
                        setShowCancelModal(true);
                      }}
                    >
                      <X className="w-4 h-4 mr-1" />
                      Ακύρωση
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Cancel Confirmation Modal */}
      <Modal
        isOpen={showCancelModal}
        onClose={() => setShowCancelModal(false)}
        title="Ακύρωση Κράτησης"
      >
        <p className="text-gray-600 mb-6">
          Είστε σίγουροι ότι θέλετε να ακυρώσετε την κράτηση για τις{' '}
          <strong>{selectedBooking?.date}</strong> στις{' '}
          <strong>{selectedBooking?.time}</strong>;
        </p>
        <div className="flex space-x-3">
          <Button
            variant="secondary"
            onClick={() => setShowCancelModal(false)}
            className="flex-1"
          >
            Όχι, Διατήρηση
          </Button>
          <Button
            variant="danger"
            onClick={() => handleCancelBooking(selectedBooking.id)}
            className="flex-1"
          >
            Ναι, Ακύρωση
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default MyBookings;