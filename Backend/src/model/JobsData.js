const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://alumni:alumni@ictakalumni.hkxzud0.mongodb.net/ICTAKALUMNI?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var JobSchema = new Schema({
    id: Number,
    postName: String,
    companyName: String,
    skills: String,
    experience: String,
    lastDate: String,
    location: String
});

var Jobdata = mongoose.model('jobs', JobSchema);
module.exports = Jobdata;