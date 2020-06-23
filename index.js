/**
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import {name as appName} from './app.json';

ReactDOM.render(<App />, document.getElementById('root'))