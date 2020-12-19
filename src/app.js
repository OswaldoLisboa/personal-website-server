const express = require('express');
const cors = require('cors');
require('../db/mongoose');
const sendEmail = require('../email/sendEmail');
const Education = require('../models/education');
const Project = require('../models/project');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/about', async (req, res) => {
  const education = await Education.find();
  res.send(education);
});

app.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({'relevance': -1});
    const tagsRaw = await Project.find().select('tags -_id')
    const tags = [...new Set(tagsRaw.map(item => {
      return item.tags.split(', ');
    }).flat())];
    res.send({ projects, tags });
  } catch (error) {
    res.status(500).send();
  }
});

 app.get('/projects/:tag', async (req, res) => {
   const _tag = req.params.tag;
   const re = new RegExp(_tag, 'i');
   try {
     const projects = await Project.find({ tags: re });
     res.send(projects);
   } catch (error) {
     res.status(500).send();
   }
 });

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  sendEmail(name, email, message);
  res.send()
});

module.exports = app;
