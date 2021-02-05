import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import thunk from 'redux-thunk';

// local imports
import App from './App';
import { theme } from './theme';
import reducers from './reducers';

// create Redux Store
export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <CssBaseline />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root'),
);
