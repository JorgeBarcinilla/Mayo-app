import React, { Component } from 'react';
import Page from './page';

class Option extends Component {

    constructor(props){
    super(props);
        this.name = props.name;
    }

    render() {
        return(
            <Page
                name = {this.name} 
            />
        ); 
    }
}

export default Option;