import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import App from './App';
import Hello from '../src/containers/Hello'
import Todo from '../src/containers/Todo'
import registerServiceWorker from './registerServiceWorker'

// 性能测试
// import Perf from 'react-addons-perf'
// if (__DEV__) {
//     window.Perf = Perf
// }

ReactDOM.render(<Todo/>, document.getElementById('root'));
registerServiceWorker();
