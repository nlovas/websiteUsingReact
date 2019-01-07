import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';

import Entry from "./components/entry/Entry";
import Home from "./components/home/Home";

//import Header from "./components/header/Header";

ReactDOM.render(
  //<Entry title = "hello" image="no image" description="words go here" date="sometime" />,
  <BrowserRouter>
  <Home></Home>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
