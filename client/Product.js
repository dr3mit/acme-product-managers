import React from 'react';
import Axios from 'axios';
import Sequelize from 'sequelize';

class Product extends React.Component {
    constructor (props) {
        super();
        this.state = {
            product,
        }
    }

    setManager(manager) {
        this.setState({product: manager.belongsTo(this.state.product)});
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