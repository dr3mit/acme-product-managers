import React from 'react';
import Axios from 'axios';

class Manager extends React.Component {
    constructor (props) {
        super();
        this.state = {
            curManagers,
        }
    }

    componentDidMount() {
        Axios.get('api/managers')
        .then((managers) => {
            this.setState({curManagers: managers})
        });
    }

    render() {
        return (<div>
            <div className="Manager">Managers: {this.state.curManagers}</div>
            </div>)
    }
} 