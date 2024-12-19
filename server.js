require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)

  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error(err));

// Routes
app.use('/api/recipes', recipeRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
