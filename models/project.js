const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  english: {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    }
  },
  spanish: {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    }
  },
  portuguese: {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    }
  },
  liveLink: {
    type: String,
    trim: true
  },
  codeLink: {
    type: String,
    trim: true
  },
  imgLink: {
    type: String,
    required: true,
    trim: true
  },
  tags: {
    type: String,
    required: true,
    trim: true
  },
  relevance: {
    type: Number,
    required: true
  }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
