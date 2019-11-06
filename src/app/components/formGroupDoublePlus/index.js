import React, { Component } from 'react';
import Page from './page';

class FormGroupDoublePlus extends Component {

    constructor(props){
    super(props);
    }

    componentDidMount(){
    }
    
    render() {
        return(
            <Page
                id = {this.props.id} 
                title = {this.props.title}
                selects = {this.props.selects}
            />
        ); 
    }
}

export default FormGroupDoublePlus;