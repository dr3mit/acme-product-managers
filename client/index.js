import React from 'react';
import App from './App'
import Manager from './Managers'
import Nav from './Nav'
import Product from './Product'
import Products from './Products'
import ReactDOM from 'react-dom'
//import Babel from 'babel-cli';


ReactDOM.render(
    <div id='app'>
        <App />
        <Manager />
        <Nav />
        <Product />
        <Products />
    </div>,
    document.getElementById('app')
);

export default ReactDOM;


