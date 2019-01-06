import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Entry from "./components/Entry";

ReactDOM.render(
  <Entry title = "hello" image="no image" description="words go here" date="sometime" />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
