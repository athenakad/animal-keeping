import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import pool from './config/db.js';

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json()); // για να διαβάζει JSON bodies

// health check
app.get('/api', (_, res) => res.send('PetBooking API is live!'));

// routes
import authRoutes from './routes/auth.js';
import bookingRoutes from './routes/bookings.js';
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);

// central error handler
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Server error' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));