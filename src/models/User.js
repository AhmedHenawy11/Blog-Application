const moongose = require('mongoose');
const Schema = moongose.Schema;

const UserSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },

})

module.exports = moongose.model('User', UserSchema)