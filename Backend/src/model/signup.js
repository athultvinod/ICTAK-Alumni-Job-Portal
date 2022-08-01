const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:admin@libraryapp.is8pbwr.mongodb.net/LibraryDB?retryWrites=true&w=majority");
const Schema = mongoose.Schema;

var NewSignupSchema = new Schema({
    fname: String,
    lname:String,
    phone:Number,
    email:String,
    pwd:String
});

var signup = mongoose.model('users', NewSignupSchema);

module.exports = signup;
