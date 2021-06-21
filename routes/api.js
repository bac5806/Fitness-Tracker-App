const router = require("express").Router();
const Workout = require("../models/workout.js");
const path = require("path");

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/exercise', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get('/stats', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/stats.html'));
});

router.get('/api/workouts', async (req, res) => {
  try {
    const workoutInfo = await Workout.find(req.params.id);
    res.json(workoutInfo);
  } catch (err) {
    res.status(400).json(err); 
  }
});

router.post('/api/workouts', ({body}, res) => {
  Workout.create(body)
  .then (
    workoutData => {
      res.json(workoutData);
    })
  .catch(err => {
    res.status(400).json(err);
  })
});

router.get('/api/workouts/range', async (req, res) => {
    try {
      const workout = await Workout.find();
      res.json(workout);
    } catch {
      res.status(400).json(err); 
    }
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  console.log("check!", body, params);
  
  Workout.findByIdAndUpdate(
    { _id: params.id },
    { $push: { exercises: body } },
    { new: true }
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).res.json(err);
    });
});

module.exports = router;