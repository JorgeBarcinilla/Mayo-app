import React, { Component } from 'react';
import Page from './page';

class Select extends Component {

    constructor(props){
    super(props);
    }
    
    render() {
        return(
            <Page
                name = {this.props.name}
                options = {this.props.options}
            />
        ); 
    }
}

export default Select;