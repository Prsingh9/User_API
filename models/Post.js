const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        },
    ],
    comments: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
            text: {
                type: String,
                required: true,
            },
            date: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Post', PostSchema);
