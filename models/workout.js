const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Name of workout is required"
    },
    weight: {
        type: Number,
    },
    type: {
        type: String,
        required: "Type is required"
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number
    },
    duration: {
        type: Number
    }
})

const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout;