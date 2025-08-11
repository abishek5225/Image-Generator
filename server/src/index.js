
const path = require('path');
require('dotenv').config();


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const morgan = require('morgan');

// Import routes (these will now have access to environment variables)
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const clipdropRoutes = require('./routes/clipdropRoutes');


const app = express();
const PORT = process.env.PORT || 5001;

console.log("✅ MONGODB_URI:", process.env.MONGODB_URI);


// Connect to MongoDB 
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    if (process.env.NODE_ENV !== 'production') {
      console.log('Connected to MongoDB');
    }
  } catch (err) {
    console.error('MongoDB connection error:', err);

    if (process.env.NODE_ENV === 'production') {
      console.error('Exiting process due to MongoDB connection failure in production');
      process.exit(1);
    } else {
      console.log('try again')
    }
  }
};

//  MongoDB connection
connectToMongoDB();

// Middleware
app.use(helmet()); // Security headers
app.use(morgan('dev')); // Logging
app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps, curl requests)
    if (!origin) return callback(null, true);

    // allowed origins
    const allowedOrigins = [
      'http://localhost:5173',
      'http://localhost:5174',
      'http://127.0.0.1:5173',
      'http://127.0.0.1:5174'
    ];

    //origin allowed checking
    if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV !== 'production') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true // Allow cookies
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/clipdrop', clipdropRoutes);


app.use('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'PromptPix API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.error(err.stack);
  }
  res.status(500).json({
    status: 'error',
    message: err.message || 'Something went wrong!'
  });
});


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../client/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  });
}

app.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Server running on port ${PORT}`);
  }
});
