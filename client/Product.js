import React from 'react';
import Axios from 'axios';

class Product extends React.Component {
    constructor (props) {
        super();
        this.state = {
            product,
        }
    }

    componentDidMount() {
        Axios.get('api/products/:id')
        .then((products) => {
            products.forEach(el => el.id === req.params.id ? this.setState({product: el}) : null)
        });
    }

    render() {
        return (<div>
        <div className="Product">Product: {this.state.product}</div>
        </div>)
    }
} 

export default Product;