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

app.get("/api/workouts", (req, res)=>{
    db.Workout.find({})
    .populate("Workout")
    .then(data=>{
        res.json(data)
    })
})

app.post("/api/workouts", ({body}, res)=>{
    db.Workout.create(body)
    .then(data=>{
        res.json(data)
    })
})

app.put("/api/workouts/:id", (req, res)=>{
    db.Workout.update({ _id: req.params.id}, { $set: {}})
    .then(data=>{
        res.json(data)
    })
})

// app.get("/api/workouts/range", (req, res)=>{
//     db.Workout.find({})
// })

app.get("/exercise", (req, res)=>{
    db.Workout.find({})
    .populate("Workout")
    .then(data=>{
        res.json(data)
    })
    .catch(err =>{
        res.json(err)
    })
})

// app.get("/stats", (req, res)=>{
//     db.Stats.find()
//     .populate("Stats")
//     .then(stats=>{
//         res.json(stats)
//     })
// })



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});