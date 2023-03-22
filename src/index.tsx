import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import thunk from 'redux-thunk';
import App from './components/App/App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './service/root'
import { BrowserRouter } from 'react-router-dom';

const enhancer = applyMiddleware(thunk);

const store = createStore(rootReducer, enhancer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export type AppDispatch = typeof store.dispatch;
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
