const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Root Route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to Blogify API',
    status: 'Server is running',
    environment: process.env.NODE_ENV || 'development'
  });
});

// Health Check Route
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Sample Posts Route (for testing)
app.get('/posts', (req, res) => {
  res.json({
    message: 'Posts endpoint',
    posts: [
      { id: 1, title: 'First Post', content: 'Hello World' },
      { id: 2, title: 'Second Post', content: 'Deployed to Cloud' }
    ]
  });
});

// Port Configuration
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
