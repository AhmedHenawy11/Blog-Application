const moongose = require('mongoose');
const Schema = moongose.Schema;

const PostSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    updatedAt:{
        type: Date,
        default: Date.now()
    },
})

module.exports = moongose.model('Post', PostSchema)