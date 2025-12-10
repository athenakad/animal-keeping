import jwt from 'jsonwebtoken';
import pool from '../config/db.js';

export default async function auth(req, res, next) {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ error: 'No token' });
  const token = header.split(' ')[1];
  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    const { rows } = await pool.query('SELECT id,email,name FROM users WHERE id=$1', [id]);
    if (!rows.length) throw Error();
    req.user = rows[0];
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
}