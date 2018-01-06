import config from './config';
import apiRouter from './api';

// EXPRESS SERVER
import express from 'express';
const server = express();

// SET THE VIEW ENGINE TO EJS
server.set('view engine', 'ejs');

// ROOT ROUTE
server.get('/', (req, res) => {
    res.render('index', {
        content: 'Hello Express and EJS'
    });
});

// API ROUTE
server.use('/api', apiRouter);

// EXPRESS STATIC MIDDLEWARE
server.use(express.static('public'));

// SERVER CONFIG CONFIRMATION
server.listen(config.port, () => {
    console.info('Express listening on port ', config.port);
});