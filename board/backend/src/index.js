import express from 'express';
import fs from 'fs';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import auth from "./routes/auth";
import board from "./routes/board";

dotenv.config({
    path: '/run/secrets/board.env'
});
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const connection_settings = JSON.parse(fs.readFileSync('/run/secrets/board-connection.json'));
mongoose.connect(connection_settings['database_connection_string']);

app.use('/api/auth', auth);
app.use('/api/board', board);

app.listen(8080, () => console.log('Running on localhost:8080'));
