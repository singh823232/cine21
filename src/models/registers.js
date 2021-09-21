const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const employeSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    studentNumber: {
        type: Number,
        required: true,
        unique: true
    },
    rollNumber: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    branch: {
        type: String,
        required: true
    },
    residency: {
        type: String
    },
    attendedExam: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})


const candidate = new mongoose.model("candidate", employeSchema);

module.exports = candidate;