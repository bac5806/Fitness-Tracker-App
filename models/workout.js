const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
    {
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
      weight: {
        type: Number,
        default: 0
      },
      reps: {
        type: Number,
        default: 0
      },
      sets: {
        type: Number,
        default: 0
      },
      distance: {
        type: Number,
        default: 0
      }
    }
  ] 
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
