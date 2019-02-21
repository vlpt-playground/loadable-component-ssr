import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { StaticRouter, matchPath } from 'react-router';
import App from './App';
import { ChunkExtractor } from '@loadable/server';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import config from './pages/config';
import rootReducer from './modules/index';
import { applyIgnore } from './modules/ignore';

const statsFile = path.resolve('./build/loadable-stats.json');

const app = express();

function createPage(rootHtml, { script, style, link, reduxState }) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no"
      />
      <meta name="theme-color" content="#000000" />
      <link rel="manifest" href="/manifest.json" />
      <title>React App</title>
      ${style}
      ${link}
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">${rootHtml}</div>
      <script>
        window.__PRELOADED_STATE__ = ${
          reduxState
            ? JSON.stringify(reduxState).replace(/</g, '\\u003c')
            : 'undefined'
        }
      </script>
      ${script}
    </body>
  </html>
  `;
}

async function serverRender(req, res) {
  const context = {};
  const extractor = new ChunkExtractor({ statsFile });
  const store = createStore(rootReducer, applyMiddleware(thunk));

  // 일치하는 라우트에서 preload 있으면 호출하여 promises 배열에 추가
  const promises = [];
  config.forEach(route => {
    const match = matchPath(req.path, route);
    if (match) {
      if (route.component.preload) {
        promises.push(route.component.preload({ store, req }));
      }
    }
  });

  await Promise.all(promises);
  store.dispatch(applyIgnore());

  const jsx = extractor.collectChunks(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );
  const rendered = ReactDOMServer.renderToString(jsx);
  const meta = {
    script: extractor.getScriptTags(),
    link: extractor.getLinkTags(),
    style: extractor.getStyleTags(),
    reduxState: store.getState()
  };
  const page = createPage(rendered, meta);
  res.send(page);
}

app.get('/', serverRender);
app.use(express.static(path.resolve(__dirname, '../build')));
app.use((req, res, next) => {
  if (!req.route) {
    return serverRender(req, res);
  }
  return next();
});

app.listen(5000, () => {
  console.log('Running on http://localhost:5000');
});

console.log('hello!');
