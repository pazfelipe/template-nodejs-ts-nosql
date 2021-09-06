import express from 'express';
import http from 'http';
import cors from 'cors';
import router from './routes';
import NextError from './utils/nextError';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(router);

app.use(NextError);

const server = http.createServer(app);

export default server;
