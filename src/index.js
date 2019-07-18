import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import BookService from './services/bookstore-services'
import { BookServiceProvider } from './components/bookstore-service-context';
import ErrorBoundry from "./components/error/error-boundry"

import App from './components/app'
import store from './store'

const bookstoreService = new BookService();

ReactDOM.render(
<Provider store={store}>
  <ErrorBoundry>
    <BookServiceProvider value={bookstoreService}>
      <Router>
        <App/>
      </Router>
    </BookServiceProvider>
  </ErrorBoundry>
</Provider>,
document.getElementById('root')
  );