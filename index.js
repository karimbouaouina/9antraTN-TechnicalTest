require('dotenv').config();
const express = require('express');
const database = require('./database/db.config');
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middlewares/authMiddleware');
const path = require('path');
const courseRoutes = require('./routes/courses');
const categoryRoutes = require('./routes/categories');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

database.mongoose
  .connect(database.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to the database'))
  .catch(err => {
    console.error('Connection error', err);
    process.exit();
  });

app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/categories', categoryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
