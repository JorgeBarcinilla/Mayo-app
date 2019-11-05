import React, { Component } from 'react';
import Page from './page';

class Select extends Component {

    constructor(props){
    super(props);
        this.name = props.name;
        this.options = props.options;
    }
    
    render() {
        return(
            <Page
                name = {this.name}
                options = {this.options}
            />
        ); 
    }
}

export default Select;