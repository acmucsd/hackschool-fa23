// import dotenv
const dotenv = require('dotenv');


dotenv.config();

// create a config object with PORT 
const config = {
    PORT: process.env.PORT,
}





module.exports = config;