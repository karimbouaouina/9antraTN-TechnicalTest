const express = require('express');
const router = express.Router();
const Course = require('../models/course');
const multer = require('multer');
const path = require('path');
const authMiddleware = require('../middlewares/authMiddleware');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/courses/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post('/', authMiddleware, upload.single('image'), async (req, res) => {
  const { title, description, price, duration, category } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const course = new Course({ title, description, price, duration, category, image });
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const courses = await Course.find().populate('category');
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate('category');
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/:id', authMiddleware, upload.single('image'), async (req, res) => {
  const { title, description, price, duration, category } = req.body;
  const image = req.file ? req.file.filename : req.body.image;

  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      { title, description, price, duration, category, image },
      { new: true }
    );
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json({ message: 'Course deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
