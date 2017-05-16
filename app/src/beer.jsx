import React, {Component} from 'react';
import BeerTable from './table.jsx';

class Beer extends Component {

    constructor() {
        super()

        this.state = {
            data: ''
        }
    }

    componentWillMount() {

        const params = {
            headers: {
                'Authorization': 'VerySecretToken'
            }
        }

        fetch('http://localhost:8000/beer', params)
            .then(res => res.json())
            .then(body => {
                this.setState({data: body.items})
            })
    }

    render() {
        return (
            <div>
                <BeerTable datalist={this.state.data}/>
            </div>
        );
    }
}

export default Beer