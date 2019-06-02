import React from 'react';
import Product from './Product';
import Axios from 'axios';

class Products extends React.Component {
    constructor (props) {
        super();
        this.state = {
            products,
        }
    }

    componentDidMount() {
        Axios.get('api/products')
        .then((res, rej) => {
            this.setState({products: res.data});
        });
    }

    render() {
        return (<div>
            <div className="Products">Products: {this.state.products}</div>
        </div>)
    }
} 