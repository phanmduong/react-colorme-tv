import React from "react";
import 'babel-polyfill';
import ReactDOM from "react-dom";
import App from './App';
import './styles/globalStyles.less';

const render = Component => {
    ReactDOM.render(<Component/>, document.getElementById("app"));
};

render(App);

if (module.hot) module.hot.accept('./App.js', () => {
    const nextApp = require('./App.js').default;
    render(nextApp);
});
