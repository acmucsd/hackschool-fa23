const express = require ('express');
const cors = require('cors');
const config = require('./config');
const router = require('./routes/gameRoutes')


// Create an Express server
const server = express();

server.use(cors());
server.use(express.json());

// Mount /api onto our server
server.use('/api', router);

server.listen(config.PORT, () => {
    console.log("Server started on PORT " + config.PORT);
});