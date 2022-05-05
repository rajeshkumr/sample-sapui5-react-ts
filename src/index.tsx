import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import userApp from './store/users/users';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import UserDetail from './components/UserDetail';

const store = createStore(userApp);

ReactDOM.render(
  <React.StrictMode>
     <HashRouter>
    <Provider store={store}>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/user/:id" element={<UserDetail />} />
    </Routes>
    </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
