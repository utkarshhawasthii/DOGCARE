require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const authRoutes = require('./routes/auth');


const app = express();

// Security middleware
app.use(helmet());

// Allow frontend to send cookies
app.use(cors({
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  credentials: true
}));

// Parse JSON
app.use(express.json());


// Session middleware (4 months)

const FOUR_MONTHS_MS = 1000 * 60 * 60 * 24 * 30 * 4; // ~120 days

app.use(session({
  name: 'referral.sid',
  secret: process.env.SESSION_SECRET || 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    ttl: FOUR_MONTHS_MS / 1000 
  }),
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', 
    sameSite: 'lax', 
    maxAge: FOUR_MONTHS_MS 
  }
}));


// Database connection

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log(' MongoDB connected'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });


// Routes

app.use('/api/auth', authRoutes);


app.get('/', (req, res) => res.send('Referral server is up'));


// Start server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
