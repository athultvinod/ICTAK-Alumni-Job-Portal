const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


var userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:[true,"please enter your first name"],
    },
    lname:{
        type:String,
        required:[true,"please enter your last name"],
    },
    email:{
        type:String,
        required:[true,"please enter your email"],
    },
    role:{
        type:String,
        enum: ['alumni','faculty','employer']
    },
    password:{
        type:String,
    },
    saltSecret:{
        type:String,
    }
});
userSchema.pre('save', function(next){
    bcrypt.genSalt(10,(err,salt) =>{
        bcrypt.hash(this.password,salt,(err,hash) =>{
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

mongoose.model('User',userSchema);