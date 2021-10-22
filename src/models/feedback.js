const mongoose = require("mongoose");



const feedbackSchema = new mongoose.Schema({

    feed: {
        type: String
    }
});

const feedback = new mongoose.model("feedback", feedbackSchema);

module.exports = feedback;