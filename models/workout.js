const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    weight: {
        type: Number,
    },
    type: {
        type: String,
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