const express = require("express");
const logger = require("morgan")
const mongoose= require("mongoose");
const db = require("./models")
const app = express();
const PORT = process.env.PORT || 8080;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("Public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout"), { useNewUrlParser: true}

app.get("/api/workouts", ({body}, res)=>{
    db.Workout.find()
    .then(workout=>{
        res.json(workout)
    })
})

app.get("/exercise", (req, res)=>{
    db.Exercise.create()
    .then(dbExercise =>{
        res.json(dbExercise)
    })
    .catch(err=>{
        res.json(err)
    })
})



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});