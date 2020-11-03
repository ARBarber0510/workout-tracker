const router = require("express").Router();
const Workout = require("../models/workout.js");
const { route } = require("./html-routes.js");


/* 
  * Add exercises to a previous workout plan.

  * Add new exercises to a new workout plan.

  * View the combined weight of multiple exercises on the `stats` page.

*/
// GET route to last workout
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
// Route to create new workout
router.post("/api/workouts", ({ body }, res) => {
  Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Route to fine workout
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Route to update workout
router.put("/api/workouts/:id", (req, res) => {
    console.log(req.body);
    console.log(req.params.id);

    Workout.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          exercises: req.body
        }
      },
      (error, dbWorkout) => {
        if (error) {
          res.send(error);
        } else {
          res.send(dbWorkout);
        }
      }
    )
});


router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout)
  })
  .catch(err => {
    res.status(400).json(err);
  });
})

module.exports = router;