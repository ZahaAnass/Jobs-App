const mongoose = require("mongoose")

const JobSchema = new mongoose.Schema({
    
    company:{
        type: String,
        required: [true, "please provide company name"],
        maxlength: 50
    },
    position: {
        type: String,
        required: [true, "Please provide position"],
        maxlength: 50
    },
    status: {
        type: String,
        enum: ["interview", "declined", "pending"],
        default: "pending"
    },
    createdBy:{
        type: mongoose.Types.ObjectId, // reference to the user model
        ref: "User", // name of the model
        required: [true, "Please provide user"]
    }
}, {timestamps: true} ) // timestamps: true will add createdAt and updatedAt fields

module.exports = mongoose.model("Job", JobSchema)