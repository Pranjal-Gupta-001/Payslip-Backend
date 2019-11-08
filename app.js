require("dotenv").config();
const axios = require('axios');
const express = require('express');
const bodyparser = require('body-parser');
const schema_valid = require('./validation/validator_schema')
const router_ = require('./routes/details')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(express.json());

app.use(schema_valid);
app.use('/employee',router_);

app.listen(PORT, (err) => {
    if (err) {
        console.log(`Error creating server.\n${err}`);
    } else {
        console.log(`Listening at port : ${PORT}`);
    }
});
