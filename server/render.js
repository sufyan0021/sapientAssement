import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk  from 'redux-thunk';
import reducer from "../src/components/store/reducer";

const path = require('path');
const fs = require('fs');
import {StaticRouter} from 'react-router-dom'

export default (req, res, next) => {
    const filePath = path.resolve(__dirname, '..', 'build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        const context={};
        const store = createStore(reducer,applyMiddleware(thunk));
        if (err) {
            console.error('err', err);
            return res.status(404).end();
        }

        const html = ReactDOMServer.renderToString(<Provider store={store}>
                <StaticRouter location={req.url} context={context}><App/></StaticRouter> 
        </Provider>);

        return res.send(
            htmlData.replace(
                '<div id="root"></div>',
                `<div id="root">${html}</div>`
            )
        );
    });
};
