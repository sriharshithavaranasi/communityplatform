const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CommunitySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('community', CommunitySchema);
