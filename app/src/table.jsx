import React, { Component } from 'react';
import {Table, Column, Cell} from 'fixed-data-table-2';
import {RingLoader} from 'halogen';

class BeerTable extends Component {
    render() {

        
        if (this.props.datalist.length === 0){
            return <RingLoader color='#4DAF7C' size='200px' />
        } else {
            return null         
        }
    }
}

export default BeerTable;