const mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    fname:{
        type:string
    },
    lname:{
        type:string
    },
    email:{
        type:string
    },
    password:{
        type:string
    },
    saltsecret:{
        type:string
    }
});
mongoose.model('Users',userSchema);