// scroll bar
import 'simplebar/src/simplebar.css';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

//
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'

import rootReducer from './reducers'
import { getPosts } from './action/posts.action';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { getCtg } from './action/category.action';
import { getUser } from './action/user.action';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
  );

store.dispatch(
  getPosts()
  )
store.dispatch(
  getCtg()
)

if(localStorage.getItem("id")){
  store.dispatch(
    getUser()
  )
}
// ----------------------------------------------------------------------

ReactDOM.render(
    <HelmetProvider>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </HelmetProvider>,
document.getElementById('root')
);

// If you want to enable client cache, register instead.
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
