const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:admin@libraryapp.is8pbwr.mongodb.net/LibraryDB?retryWrites=true&w=majority");
const Schema = mongoose.Schema;

var JobsSchema = new Schema({
    jobtitle: String,
    employername:String,
    jobdescription:String,
    dateposted: Date,
    lastdate: Date
})

var jobs = mongoose.model('jobs', JobsSchema);

module.exports = jobs;
