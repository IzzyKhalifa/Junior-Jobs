const router = require('express').Router();
const { job } = require('../../models');

// models\jobpost.js
// C:\Users\James\Junior-jobs\models\jobpost.js

// GET all jobs
router.get('/', async (req, res) => {
    try {
      const jobData = await job.findAll({
        include: [{ model: job }],
      });
      res.status(200).json(jobData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// GET one job
router.get('/:id', async (req, res) => {
    try {
      const jobData = await job.findByPk(req.params.id, {
        include: [{ model: job }],
      });
  
      if (!job) {
        res.status(404).json({ message: 'No job found with that id!' });
        return;
      }
  
      res.status(200).json(jobData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;