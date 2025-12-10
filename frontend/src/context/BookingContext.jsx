import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext(null);

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [currentBooking, setCurrentBooking] = useState(null);

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  const updateBooking = (id, updatedData) => {
    setBookings(bookings.map(b => b.id === id ? { ...b, ...updatedData } : b));
  };

  const deleteBooking = (id) => {
    setBookings(bookings.filter(b => b.id !== id));
  };

  return (
    <BookingContext.Provider value={{
      bookings,
      currentBooking,
      setCurrentBooking,
      addBooking,
      updateBooking,
      deleteBooking
    }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within BookingProvider');
  }
  return context;
};