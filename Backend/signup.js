require('./config/config');
require('./models/db');

const express = require('express');
const cors = require('cors');

var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.listen(process.env.PORT,()=> console.log(`server started at port:'${process.env.PORT}`));