require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// Σύνδεση με MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error', err));

// Απλό μοντέλο
const Request = mongoose.model('Request', new mongoose.Schema({
  ownerName: String,
  petName: String,
  service: String, // φιλοξενία, βόλτα
  dates: String,
  status: { type: String, default: 'pending' }
}, { timestamps: true }));

// Routes
app.get('/api/test', (_, res) => res.json({ msg: 'Hello from backend!' }));

// Δημιουργία αιτήματος
app.post('/api/requests', async (req, res) => {
  try {
    const doc = await Request.create(req.body);
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Λήψη όλων των αιτημάτων
app.get('/api/requests', async (_, res) => {
  const docs = await Request.find().sort({ createdAt: -1 });
  res.json(docs);
});

// Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));