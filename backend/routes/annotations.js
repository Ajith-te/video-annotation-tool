const express = require('express');
const router = express.Router();
const Annotation = require('../models/Annotation');

router.post('/', async (req, res) => {
  const annotation = new Annotation(req.body);
  try {
    await annotation.save();
    res.status(201).send(annotation);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/:videoId', async (req, res) => {
  try {
    const annotations = await Annotation.find({ videoId: req.params.videoId });
    res.send(annotations);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
