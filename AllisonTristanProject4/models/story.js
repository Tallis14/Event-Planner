const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storySchema = new Schema({
        cat: {type: String, required: [true, 'Category is required']},
        loc: {type: String, required: [true, 'Location is required']},
        author: {type: Schema.Types.ObjectId, ref: 'User'},
        title: {type: String, required: [true, 'title is required']},
        details: {type: String, required: [true, 'details are required']},
        date: {type: String, required: [true, 'date is required']},
        start: {type: String, required: [true, 'start date is required']},
        end: {type: String, required: [true, 'end date is required']},
        host: {type: String, required: [true, 'host is required']},
        img:{type: String, required: [true, 'picture url is required']},

    },
    {timestamps: true}
);
//collection name is stories in the database
module.exports = mongoose.model('Story', storySchema);


