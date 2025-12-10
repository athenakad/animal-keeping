import api from './api';

export const bookingService = {
  // Get all bookings for current user
  getMyBookings: async () => {
    const response = await api.get('/bookings');
    return response.data;
  },

  // Get single booking
  getBooking: async (id) => {
    const response = await api.get(`/bookings/${id}`);
    return response.data;
  },

  // Create new booking
  createBooking: async (bookingData) => {
    const response = await api.post('/bookings', bookingData);
    return response.data;
  },

  // Update booking
  updateBooking: async (id, bookingData) => {
    const response = await api.put(`/bookings/${id}`, bookingData);
    return response.data;
  },

  // Cancel booking
  cancelBooking: async (id) => {
    const response = await api.delete(`/bookings/${id}`);
    return response.data;
  },

  // Get available time slots
  getAvailableSlots: async (date) => {
    const response = await api.get(`/timeslots?date=${date}`);
    return response.data;
  }
};