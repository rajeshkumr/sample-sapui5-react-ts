import React, { useRef } from 'react';
import {
  ThemeProvider
} from '@ui5/webcomponents-react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
// Icon from webcomponents
import '@ui5/webcomponents-icons/dist/json-imports/Icons.js';
import APP_CONFIG from './config/app';
import "./App.css";
import * as Constants from './constants';

export default function App() {
  return (
    <ThemeProvider>
      <Header appConstant={Constants} title={APP_CONFIG.title}/>
      <Main appConstant={Constants} />
      <Footer appConstant={Constants} />
    </ThemeProvider>
  );
}
