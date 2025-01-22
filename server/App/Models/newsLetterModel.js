const { Schema, model } = require("mongoose");

const newsleterSchema = Schema({
    email : {
        type: String,
        required: true,
        unique: true,
    },
    isMember:{
        type: Boolean,
        default: false
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: null
    }
}, {timestamps: true});

const NewsLetter = model('NewsLetter', newsleterSchema);

module.exports = NewsLetter;