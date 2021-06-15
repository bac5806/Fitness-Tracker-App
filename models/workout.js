const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      date: {
        type: Date,
        default: Date.now
      }
    },
    type: {
      type: String,
      trim: true,
      required: "Enter the type of workout"
    },
    name: {
      type: String,
      trim: true,
      required: "Enter name for workout"
    },
    duration: {
      type: Number,
      required: "Enter a duration for the workout"
    },
    reps: {
      type: Number,
      required: "Enter number of reps"
    },
    sets: {
      type: Number,
      required: "Enter number of sets"
    }
  }
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
