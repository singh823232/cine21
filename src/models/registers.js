const mongoose = require("mongoose");


const employeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    studentNumber: {
        type: Number,
        required: true,
        unique: true,
        dropDups: true
    },
    domain: {
        type: String,
    },
    branch: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    hasAppeared: {
        type: Boolean,
        default: false,
    },
    isHostler: {
        type: String,
        default: null
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true,
        dropDups: true
    },
    email: {
        type: String,
        require: true,
        max: 50,
        unique: true,
        dropDups: true
    },
    password: {
        type: String,
    },
    score: {
        type: Number,
        default: 0
    },
    categorySelected: {
        type: String,
    },
    loginAt: {
        type: Date,
        default: null
    },
    hackerrank: {
        type: String,
    },
},
    {
        timestamps: { createdAt: true, updatedAt: false },
    }
);




const candidate = new mongoose.model("candidate", employeSchema);

module.exports = candidate;