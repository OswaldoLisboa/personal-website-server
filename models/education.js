const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  english: {
    period: {
      type: String,
      required: true,
      trim: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    location: {
      type: String,
      required: true,
    }
  },
  spanish: {
    period: {
      type: String,
      required: true,
      trim: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    location: {
      type: String,
      required: true,
    }
  },
  portuguese: {
    period: {
      type: String,
      required: true,
      trim: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    location: {
      type: String,
      required: true,
    }
  },
  relevance: {
    type: Number,
    required: true
  }
});

const Education = mongoose.model('Education', educationSchema);

module.exports = Education;
