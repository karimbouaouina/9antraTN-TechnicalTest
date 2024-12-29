const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  image: { type: String, required: false }, 
});

module.exports = mongoose.model('Course', CourseSchema);
