const { Schema } = require("mongoose");


const userModel = new Schema({
    user: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: Number,
        required: true,
        minlen: 8,
        maxlen: 16,
    },

    dob: {
        type: Number,
    }

});

module.exports = userModel;