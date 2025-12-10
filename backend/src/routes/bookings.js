import express from 'express';
import pool from '../config/db.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

// όλες οι κρατήσεις του logged-in χρήστη
router.get('/', auth, async (req, res, next) => {
  try {
    const sql = `
      SELECT b.*, s.name service_name, s.price
      FROM bookings b
      JOIN services s ON s.id = b.service_id
      WHERE b.user_id = $1
      ORDER BY b.start_time`;
    const { rows } = await pool.query(sql, [req.user.id]);
    res.json(rows);
  } catch (err) { next(err); }
});

// νέα κράτηση
router.post('/', auth, async (req, res, next) => {
  try {
    const { service_id, start_time, pet_name } = req.body;
    const sql = `
      INSERT INTO bookings (user_id, service_id, start_time, end_time, pet_name)
      VALUES ($1, $2, $3, $3 + interval '1 hour', $4)
      RETURNING *`;
    const { rows } = await pool.query(sql, [req.user.id, service_id, start_time, pet_name]);
    res.status(201).json(rows[0]);
  } catch (err) { next(err); }
});

export default router;