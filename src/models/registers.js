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
    },
    domain: {
        type: String,
        required: true
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
        unique: true
    },
    email: {
        type: String,
        require: true,
        max: 50,
        unique: true,
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
    }
},
    {
        timestamps: { createdAt: true, updatedAt: false },
    }
);




const candidate = new mongoose.model("candidate", employeSchema);

module.exports = candidate;