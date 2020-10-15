import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../src/App';
import serverRenderer from './render';

const PORT = 8000;

const app = express();
const router = express.Router();

router.use('^/$', serverRenderer);

router.use(
    express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
);

router.use('*', serverRenderer);

app.use(router);

app.listen(PORT,()=>{
    console.log(`App Launched on ${PORT}`)
})

