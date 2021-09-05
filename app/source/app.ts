import express from 'express';
import http from 'http';
import cors from 'cors';
import router from './routes';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(router);

const server = http.createServer(app);

export default server;
